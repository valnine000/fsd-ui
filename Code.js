function doGet(e) {
    return HtmlService
        .createTemplateFromFile('Index')
        .evaluate()
        .setTitle('FSD-UI')
        .addMetaTag('viewport', 'width=device-width, initial-scale=1')
        .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}