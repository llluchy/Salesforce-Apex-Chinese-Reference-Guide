import PyPDF2
import sys

def extract_pdf_text(pdf_path):
    try:
        with open(pdf_path, 'rb') as pdf_file:
            reader = PyPDF2.PdfReader(pdf_file)
            text = ""
            for page_num, page in enumerate(reader.pages):
                page_text = page.extract_text()
                text += f"\n--- Page {page_num + 1} ---\n"
                text += page_text
            return text
    except Exception as e:
        return f"Error reading PDF: {str(e)}"

if __name__ == "__main__":
    pdf_path = "docs/Apex 参考指南/System 命名空间/String Class.pdf"
    text = extract_pdf_text(pdf_path)
    
    # 保存到文件
    with open("string_pdf_content.txt", "w", encoding="utf-8") as f:
        f.write(text)
    
    # 打印前5000个字符
    print(text[:5000])
