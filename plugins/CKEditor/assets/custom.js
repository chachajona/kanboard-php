function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    // For old versions of IE
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    // Other browsers
    script.onload = function () {
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

loadScript(
  "https://cdn.ckeditor.com/ckeditor5/41.2.1/super-build/ckeditor.js",
  function () {
    KB.component("text-editor", function (containerElement, options) {
      var textarea, writeModeElement;

      this.render = function () {
        writeModeElement = buildWriteMode();

        containerElement.appendChild(
          KB.dom("div")
            .attr("class", "text-editor")
            .add(writeModeElement)
            .build()
        );

        if (options.autofocus) {
          textarea.focus();
        }
      };

      function decodeHtmlEntities(text) {
        var textArea = document.createElement("textarea");
        textArea.innerHTML = text;
        return textArea.value;
      }

      function buildWriteMode() {
        // Create a new div element to hold the CKEditor instance
        var editorContainer = document.createElement("div");
        editorContainer.className = "ckeditor-container";

        // Create a textarea element with a unique ID
        var textareaElement = KB.dom("textarea")
          .attr("name", options.name)
          .attr("id", "ckeditor-textarea")
          .build();

        // Append the textarea to the editor container
        editorContainer.appendChild(textareaElement);

        // Set other attributes like tabindex and required if they are provided in options
        if (options.tabindex) {
          textareaElement.setAttribute("tabindex", options.tabindex);
        }

        if (options.required) {
          textareaElement.setAttribute("required", "required");
        }

        if (options.placeholder) {
          textareaElement.setAttribute("placeholder", options.placeholder);
        }

        // Initialize CKEditor on the textarea
        CKEDITOR.ClassicEditor.create(textareaElement, {
          // CKEditor configuration options
          toolbar: {
            items: [
              "heading",
              "|",
              "bold",
              "italic",
              "strikethrough",
              "underline",
              "|",
              "bulletedList",
              "numberedList",
              "|",
              "outdent",
              "indent",
              "|",
              "undo",
              "redo",
              "|",
              "fontColor",
              "highlight",
              "|",
              "alignment",
              "|",
              "link",
              "insertTable",
              "-",
              "fontSize",
              "fontFamily",
              "fontBackgroundColor",
              "|",
              "link",
              "uploadImage",
              "blockQuote",
              "mediaEmbed",
              "codeBlock",
              "htmlEmbed",
              "|",
              "specialCharacters",
              "horizontalLine",
              "pageBreak",
            ],
            shouldNotGroupWhenFull: true,
          },
          list: {
            properties: {
              styles: true,
              startIndex: true,
              reversed: true,
            },
          },
          heading: {
            options: [
              {
                model: "paragraph",
                title: "Paragraph",
                class: "ck-heading_paragraph",
              },
              {
                model: "heading1",
                view: "h1",
                title: "Heading 1",
                class: "ck-heading_heading1",
              },
              {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
              },
              {
                model: "heading3",
                view: "h3",
                title: "Heading 3",
                class: "ck-heading_heading3",
              },
              {
                model: "heading4",
                view: "h4",
                title: "Heading 4",
                class: "ck-heading_heading4",
              },
              {
                model: "heading5",
                view: "h5",
                title: "Heading 5",
                class: "ck-heading_heading5",
              },
              {
                model: "heading6",
                view: "h6",
                title: "Heading 6",
                class: "ck-heading_heading6",
              },
            ],
          },
          placeholder: options.placeholder,
          fontFamily: {
            options: [
              "default",
              "Arial, Helvetica, sans-serif",
              "Courier New, Courier, monospace",
              "Georgia, serif",
              "Lucida Sans Unicode, Lucida Grande, sans-serif",
              "Tahoma, Geneva, sans-serif",
              "Times New Roman, Times, serif",
              "Trebuchet MS, Helvetica, sans-serif",
              "Verdana, Geneva, sans-serif",
            ],
            supportAllValues: true,
          },
          fontSize: {
            options: [10, 12, 14, "default", 18, 20, 22],
            supportAllValues: true,
          },
          htmlSupport: {
            allow: [
              {
                name: /.*/,
                attributes: true,
                classes: true,
                styles: true,
              },
            ],
          },
          htmlEmbed: {
            showPreviews: true,
          },
          link: {
            decorators: {
              addTargetToExternalLinks: true,
              defaultProtocol: "https://",
              toggleDownloadable: {
                mode: "manual",
                label: "Downloadable",
                attributes: {
                  download: "file",
                },
              },
            },
          },
          mention: {
            feeds: [
              {
                marker: "@",
                feed: [
                  "@apple",
                  "@bears",
                  "@brownie",
                  "@cake",
                  "@cake",
                  "@candy",
                  "@canes",
                  "@chocolate",
                  "@cookie",
                  "@cotton",
                  "@cream",
                  "@cupcake",
                  "@danish",
                  "@donut",
                  "@dragée",
                  "@fruitcake",
                  "@gingerbread",
                  "@gummi",
                  "@ice",
                  "@jelly-o",
                  "@liquorice",
                  "@macaroon",
                  "@marzipan",
                  "@oat",
                  "@pie",
                  "@plum",
                  "@pudding",
                  "@sesame",
                  "@snaps",
                  "@soufflé",
                  "@sugar",
                  "@sweet",
                  "@topping",
                  "@wafer",
                ],
                minimumCharacters: 1,
              },
            ],
          },
          removePlugins: [
            "AIAssistant",
            "CKBox",
            "CKFinder",
            "EasyImage",
            "RealTimeCollaborativeComments",
            "RealTimeCollaborativeTrackChanges",
            "RealTimeCollaborativeRevisionHistory",
            "PresenceList",
            "Comments",
            "TrackChanges",
            "TrackChangesData",
            "RevisionHistory",
            "Pagination",
            "WProofreader",
            "MathType",
            "SlashCommand",
            "Template",
            "DocumentOutline",
            "FormatPainter",
            "TableOfContents",
            "PasteFromOfficeEnhanced",
            "CaseChange",
          ],
        })
          .then((editor) => {
            // Set the initial value of the textarea from the <script> tag
            var textWrapper = KB.dom(containerElement).find("script");
            if (textWrapper) {
              textareaElement.value = decodeHtmlEntities(textWrapper.innerHTML);
              editor.setData(textareaElement.value);
            }

            // Listen for changes in CKEditor and update the original textarea value
            editor.model.document.on("change:data", () => {
              textareaElement.value = editor.getData();
            });
            // If you need to access the CKEditor instance later, you can assign it to a variable
            window.ckeditorInstance = editor;
          })
          .catch((error) => {
            console.error("Error initializing CKEditor:", error);
          });

        // Return the editor container
        return editorContainer;
      }
    });
  }
);
