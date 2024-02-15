angular.module('myApp', [])
    .controller('PdfController', ['$scope', function ($scope) {
        // Se inicializa la variable 'inputText' en el ámbito del controlador.
        $scope.inputText = '';

        // Esta función se llama cuando el texto en el campo de entrada cambia para actualizar el contenido del div de salida.
        $scope.updateDiv = function (text) {
            $scope.inputText = text;
        };

        // Esta función genera un PDF con el contenido actual del div de salida.
        $scope.generatePdf = function () {
            var docDefinition = {
                content: [
                    {
                        text: "Saludos desde el PDF", // saludo predeterminado en la generación del PDF
                        alignment: 'center',
                        style: "header"
                    },
                    {
                        text: $scope.inputText, // Utiliza el contenido del campo de entrada como texto en el PDF
                        style: 'content'
                    }
                ],
                styles: { // estilos del contenido del PDF
                    header: {
                        fontSize: 18,
                        bold: true,
                        alignment: 'justify'
                    },
                    content: {
                        fontSize: 14,
                        margin: [20, 20, 20, 20]
                    }
                }
            };

            // Utiliza pdfMake para crear y descargar un PDF con el contenido especificado.
            pdfMake.createPdf(docDefinition).download('contenido.pdf');
        };
    }]);