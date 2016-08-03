<?php $pagePath = __FILE__; ?>
<?php $bodyClass = "layout-page"; ?>
<?php require_once $_SERVER["DOCUMENT_ROOT"] . "/lib.php"; ?>
<?php require "part/app-header.php"; ?>
<?php require "part/header.php"; ?>
<?php require "part/header-sub.php"; ?>
3차 댑스일 경우 ...<br>
댑스 구분은 파일명 에서 - 로 한다.<br>
Depth 0 ID : <?php echo getDepthId(0); ?><br>
Depth 1 ID : <?php echo getDepthId(1); ?><br>
Depth 2 ID : <?php echo getDepthId(2); ?><br>
Depth 3 ID : <?php echo getDepthId(3); ?><br>
<?php require "part/footer-sub.php"; ?>
<?php require "part/footer.php"; ?>
<?php require "part/app-footer.php"; ?>