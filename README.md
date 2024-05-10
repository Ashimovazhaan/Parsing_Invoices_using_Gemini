# Parsing_Russian_Invoices_using_Gemini
Parsing Invoices using Gemini 1.5 API with Google Apps Script

This guide outlines the process of modifying a Google Apps Script provided by the Optimization Modeling lesson to effectively extract information from Russian PDF documents.


# Language Configuration

No adjustments needed: Gemini, the language model utilized by the script, should automatically detect and process Russian text without requiring specific language settings.

# Data Validation

Executing the script: To run the script found in this repository, you must insert your own API Key into the Sample.gs file.

Reviewing the output: After running the script, inspect the generated JSON object to verify that it accurately reflects the extracted information from the PDF (see attached file).

Refining prompts: If the output is inaccurate or incomplete, adjust the prompts within the "q" variable to provide clearer guidance for Gemini's parsing.


(4 files attached :
1)InvoiceApp.gs;
2)Sample.gs;
3) screen1 - screen of invoice from goodle driver;
4) screen2- screen of execution from Appscript)
