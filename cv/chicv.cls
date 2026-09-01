\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{chicv}[2022/08/21 A CV template based on the Curriculum Vitae of Alex Chi Zhang]
\LoadClass[10pt]{article}

\RequirePackage[
    letterpaper,
    left=0.65in,
    right=0.65in,
    top=0.55in,
    bottom=0.6in,
    nohead
]{geometry}

\RequirePackage{fancyhdr}

\RequirePackage[T1]{fontenc}
\RequirePackage{titlesec}
\RequirePackage{XCharter}
\RequirePackage{xcolor}
\RequirePackage{xifthen}
\RequirePackage{xparse}
\RequirePackage[hidelinks]{hyperref}
\RequirePackage{fontawesome5}
\RequirePackage{enumitem}
\RequirePackage[normalem]{ulem}
\RequirePackage{contour}

\pagestyle{fancy}
\fancypagestyle{default}{
    \fancyhf{}
    \RenewDocumentCommand{\headrulewidth}{}{0pt}
}
\fancypagestyle{lastpage}{
    \fancyhf{}
    \RenewDocumentCommand{\headrulewidth}{}{0pt}
    \rfoot{\color{gray}Updated on \today}
}

\setlength{\footskip}{14pt}
\setlength{\parindent}{0pt}
\setlength{\leftskip}{0pt}
\setlist[itemize]{
    leftmargin=20pt,
    itemsep=1pt,
    topsep=2pt,
    parsep=0pt,
    partopsep=0pt,
    after=\vspace{1pt}
}

\newcommand{\HUGE}{\@setfontsize\HUGE{24pt}{18}}
\renewcommand\Huge{\@setfontsize\Huge{22pt}{18}}
\renewcommand\huge{\@setfontsize\huge{20pt}{18}}
\renewcommand\LARGE{\@setfontsize\LARGE{18pt}{18}}
\renewcommand\Large{\@setfontsize\Large{12pt}{18}}
\renewcommand\large{\@setfontsize\large{11pt}{18}}

\newcommand{\headingfont}{\sffamily\bfseries}

\newcommand{\useChinese}[2]{
    \RequirePackage{xeCJK}
    \setCJKmainfont{SourceHanSerifCN}[
        Path = ./fonts/,
        Extension = .otf,
        UprightFont = *-#1,
        BoldFont = *-#2,
    ]
    \XeTeXlinebreaklocale "zh"
    \XeTeXlinebreakskip = 0pt plus 1pt
}

\titleformat{\section}
    {\headingfont\Large}
    {}
    {0em}
    {\vspace{-2ex}{\color{gray}\hrule}}
    []
\titlespacing{\section}
    {0pt}
    {5pt}
    {2pt}

\titleformat{\subsection}
    {}
    {}
    {0em}
    {}
    []
\titlespacing{\subsection}
    {12pt}
    {\parskip}
    {\parskip}

\renewcommand{\ULdepth}{3pt}
\contourlength{0.6pt}
\RenewDocumentCommand{\underline}{ m }
{
    \uline{\phantom{#1}}%
    \llap{\contour{white}{#1}}%
}

\NewDocumentCommand{\cventry}{ m m o o }
{
    \subsection[#1]{\textbf{#1} \hfill #2}
    \IfNoValueTF{#3}
    {}
    {\setlength{\parindent}{12pt}{\par #3 \hfill #4 \par}}
    \vspace{2pt}
}

\NewDocumentCommand{\name}{ m }
{{\headingfont\Huge#1}}

\NewDocumentEnvironment{compactlist}{}
{
    \begin{itemize}[
        label={},
        leftmargin=12pt,
        itemsep=-\parsep,
        topsep=0pt-\partopsep-\parskip,
    ]
}
{
    \end{itemize}
}

\newcounter{infonum}
\NewDocumentCommand{\infomark}{}{}

\NewDocumentEnvironment{basicinfo}{ o }
{%
    \par\vspace{1ex}
    \setcounter{infonum}{0}
    \IfValueTF{#1}{
        \RenewDocumentCommand{\infomark}{}{#1}
    }
    {
    }
}
{%
}

\NewDocumentCommand{\info}{ m }{
    \stepcounter{infonum}
    \ifthenelse{\theinfonum = 1}{
        #1
    }{
        $\mid$ #1
    }
}

\NewDocumentCommand{\email}{ m }{
    \faEnvelope\ \underline{\href{mailto:#1}{#1}}
}

\NewDocumentCommand{\phone}{ m }{
    \faPhone\ {#1}
}

\NewDocumentCommand{\linkedin}{ m o }{
    \faLinkedinIn\IfNoValueTF{#2}{
        \underline{\href{#1}{#1}}
    }{
        \underline{\href{#2}{#1}}
    }
}

\NewDocumentCommand{\linkedinsquare}{ m o }{
    \faLinkedin\IfNoValueTF{#1}{
        \underline{\href{#1}{#1}}
    }{
        \underline{\href{#2}{#1}}
    }
}

\NewDocumentCommand{\github}{ m o }{
    \faGithub\IfNoValueTF{#2}{
        \underline{\href{#1}{#1}}
    }{
        \underline{\href{#2}{#1}}
    }
}

\NewDocumentCommand{\homepage}{ m o }{
    \faGlobe\IfNoValueTF{#2}{
        \underline{\href{#1}{#1}}
    }{
        \underline{\href{#2}{#1}}
    }
}

\NewDocumentCommand{\iconlink}{ o o m }{
    \IfNoValueTF{#1}{
        \let\icon\faLink
    }{
        \let\icon#1
    }
    \IfNoValueTF{#2}{
        \hspace{-12pt}\underline{\href{#3}{\icon}}
    }{
        \hspace{-12pt}\underline{\href{#3}{\icon\ #2}}
    }
    \hspace{-8pt}
}

\pagestyle{default}
