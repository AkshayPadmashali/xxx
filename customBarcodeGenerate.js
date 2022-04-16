$("document").ready(function () {
  $("#generateBarcode").on("click", function () {
    var barcodeValue = $("#barcodeValue").val();
    var barcodeType = `code128`;
    var showText = $("#showText").val();
    JsBarcode("#barcode", barcodeValue, {
      format: barcodeType,
      displayValue: showText,
      lineColor: "#24292e",
      width: 2,
      height: 40,
      fontSize: 20,
    });
  });
});
