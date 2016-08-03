<?php
$config['isBuild'] = true;

requirePhpInPath("views", "../html/views");

chdir("../tool/front");
exec("grunt build");
chdir("../../www");

while (true) {
    clearstatcache();
    
    if (is_dir("resources"))
        break;
    
    sleep(1);
}

fileCopy("resources", "../html/resources");

function requirePhpInPath($inputDir, $outputDir)
{
    $realPath = __DIR__ . "/" . $inputDir;
    
    if (! is_dir($realPath)) {
        return;
    }
    
    $h = opendir($realPath);
    
    while (false !== ($file = readdir($h))) {
        if ($file == '.' || $file == '..') {
            continue;
        }
        
        if (strpos($file, '.php') === false)
            continue;
        
        requirePhp($inputDir . "/" . $file, $outputDir . "/" . str_replace(".php", ".html", $file));
    }
}

function requirePhp($input, $output)
{
    global $config;
    
    ob_start();
    
    include $input;
    $content = ob_get_contents();
    
    ob_end_clean();
    
    $dirname = dirname(__DIR__ . "/" . $output);
    if (! is_dir($dirname)) {
        mkdir($dirname, 0755, true);
    }
    
    $handle = fopen(__DIR__ . "/" . $output, "w");
    fwrite($handle, $content);
    fclose($handle);
}

function fileCopy($odir, $ndir)
{
    if (filetype($odir) === 'dir') {
        clearstatcache();
        
        @mkdir($ndir);
        
        if ($fp = @opendir($odir)) {
            while (false !== ($ftmp = readdir($fp))) {
                if (($ftmp !== ".") && ($ftmp !== "..") && ($ftmp !== "")) {
                    if (filetype($odir . '/' . $ftmp) === 'dir') {
                        clearstatcache();
                        
                        set_time_limit(0);
                        fileCopy($odir . '/' . $ftmp, $ndir . '/' . $ftmp);
                    } else {
                        copy($odir . '/' . $ftmp, $ndir . '/' . $ftmp);
                    }
                }
            }
        }
        if (is_resource($fp)) {
            closedir($fp);
        }
    } else {
        copy($odir, $ndir);
    }
}
?>
성공