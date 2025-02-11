"use strict";
document.addEventListener("DOMContentLoaded", () => {
  ///////////////////////////////////////////////////////////// Start Section Variables
  let DivEditor = document.querySelector("#editor");
  let StatusBarInMenu = document.querySelector("#status_bar");
  let FileNameInMenu = document.querySelector("#fileName");
  let ModeFileInMenu = document.querySelector("#modeFile");
  let LinesColumns = document.querySelector("#lineColumn");
  let Lock_Lock = document.querySelector(".lock-status-bar-lock");
  let Lock_Open = document.querySelector(".lock-status-bar-open");
  let SelectModeFile = document.querySelector("#select-mode-file");
  //////////////////////////// Start Section Variables For Language
  let DivStatusBarForNameFile = document.querySelector(
    ".name-file div:first-child"
  );
  let DivStatusBarForModeFile = document.querySelector(
    ".mode-file div:first-child"
  );
  let DivStatusBarForLineCol = document.querySelector(
    ".line-col div:first-child"
  );
  let StatusBarForLockLock = document.querySelector(
    ".lock i.lock-status-bar-lock"
  );
  let StatusBarForLockOpen = document.querySelector(
    ".lock i.lock-status-bar-open"
  );
  let StatusBarForSetModeFile = document.querySelector(".sect-set-mode-file");
  //////////////////////////// End Section Variables For Language
  let EditorCodeMirror;
  let StateStatusBar = true;
  let StateLineWrapping = true;
  //////////////////////////// Start Section Variables For Menu
  let ButtonNewFileMenu = document.querySelector(".button_new_file_menu");
  let ButtonUndoMenu = document.querySelector(".button_undo_menu");
  let ButtonRedoMenu = document.querySelector(".button_redo_menu");
  let ButtonCutMenu = document.querySelector(".button_cut_menu");
  let ButtonCopyMenu = document.querySelector(".button_copy_menu");
  let ButtonPasteMenu = document.querySelector(".button_paste_menu");
  let ButtonDeleteMenu = document.querySelector(".button_delete_menu");
  let ButtonDuplicateMenu = document.querySelector(".button_duplicate_menu");
  let ButtonSearchWithGoogleMenu = document.querySelector(
    ".button_search_with_google_menu"
  );
  let ButtonFindMenu = document.querySelector(".button_find_menu");
  let ButtonFindNexMenu = document.querySelector(".button_find_next_menu");
  let ButtonFindPrevMenu = document.querySelector(".button_find_prev_menu");
  let ButtonReplaceMenu = document.querySelector(".button_replace_menu");
  let ButtonReplaceAllMenu = document.querySelector(".button_replace_all_menu");
  let ButtonSelectAllMenu = document.querySelector(".button_select_all_menu");
  let ButtonCreateTemplateHtmlMenu = document.querySelector(
    ".button_create_template_html_menu"
  );
  let ButtonCreateTemplateCssMenu = document.querySelector(
    ".button_create_template_css_menu"
  );
  let ButtonCreateTemplateJavaScriptMenu = document.querySelector(
    ".button_create_template_java_script_menu"
  );
  let ButtonCreateTemplateSqlMenu = document.querySelector(
    ".button_create_template_sql_menu"
  );
  let ButtonCreateTemplateSassMenu = document.querySelector(
    ".button_create_template_sass_menu"
  );
  let ButtonCreateTemplatePhpMenu = document.querySelector(
    ".button_create_template_php_menu"
  );
  let ButtonCreateTemplatePythonMenu = document.querySelector(
    ".button_create_template_python_menu"
  );
  let ButtonCreateTemplateCppMenu = document.querySelector(
    ".button_create_template_cpp_menu"
  );
  let ButtonCreateTemplateCSharpMenu = document.querySelector(
    ".button_create_template_c_sharp_menu"
  );
  let ButtonCreateTemplateKivyMenu = document.querySelector(
    ".button_create_template_kivy_menu"
  );
  let ButtonCreateTemplateJavaMenu = document.querySelector(
    ".button_create_template_java_menu"
  );
  let ButtonCreateTemplateKotlinMenu = document.querySelector(
    ".button_create_template_kotlin_menu"
  );
  let ButtonCreateTemplateXmlMenu = document.querySelector(
    ".button_create_template_xml_menu"
  );
  let ButtonCreateTemplateTypeScriptMenu = document.querySelector(
    ".button_create_template_type_script_menu"
  );
  let ButtonCreateTemplateGoMenu = document.querySelector(
    ".button_create_template_go_menu"
  );
  let ButtonCreateTemplateCythonMenu = document.querySelector(
    ".button_create_template_cython_menu"
  );
  let ButtonCreateTemplateDMenu = document.querySelector(
    ".button_create_template_d_menu"
  );
  let ButtonCreateTemplateDiffMenu = document.querySelector(
    ".button_create_template_diff_menu"
  );
  let ButtonCreateTemplateLiveSCriptMenu = document.querySelector(
    ".button_create_template_live_script_menu"
  );
  let ButtonCreateTemplateLuaMenu = document.querySelector(
    ".button_create_template_lua_menu"
  );
  let ButtonStatusBarMenu = document.querySelector(".button_status_bar_menu");
  let IconCheckStatusBar = document.querySelector(
    ".icon_check_status_bar_section_inner_edit_menu_editor_code"
  );
  let ButtonLiveWrappingMenu = document.querySelector(
    ".button_live_wrapping_menu"
  );
  let ButtonFormatAllCodeMenu = document.querySelector(
    ".button_format_all_code_menu"
  );
  let ButtonCommentMenu = document.querySelector(".button_comment_menu");
  let ButtonEmacsMenu = document.querySelector(".button_emacs_menu");
  let ButtonSublimeMenu = document.querySelector(".button_sublime_menu");
  let ButtonVimMenu = document.querySelector(".button_vim_menu");
  let ButtonSetLanguageChineseMenu = document.querySelector(
    ".button_set_language_chinese_menu"
  );
  let ButtonSetLanguageSpanishMenu = document.querySelector(
    ".button_set_language_spanish_menu"
  );
  let ButtonSetLanguageEnglishMenu = document.querySelector(
    ".button_set_language_english_menu"
  );
  let ButtonSetLanguageHindiMenu = document.querySelector(
    ".button_set_language_hindi_menu"
  );
  let ButtonSetLanguagePersianMenu = document.querySelector(
    ".button_set_language_persian_menu"
  );
  let ButtonSetLanguageGermanMenu = document.querySelector(
    ".button_set_language_german_menu"
  );
  let ButtonSetLanguageFrenchMenu = document.querySelector(
    ".button_set_language_french_menu"
  );
  let ButtonSetLanguagePortugueseMenu = document.querySelector(
    ".button_set_language_portuguese_menu"
  );
  let ButtonSetLanguageRussianMenu = document.querySelector(
    ".button_set_language_russian_menu"
  );
  let ButtonSetThemeDayMenu = document.querySelector(
    ".button_set_theme_day_menu"
  );
  let ButtonSetThemeNightMenu = document.querySelector(
    ".button_set_theme_night_menu"
  );
  let ButtonSetThemeAbbottMenu = document.querySelector(
    ".button_set_theme_abbott_menu"
  );
  let ButtonSetThemeAbcdefMenu = document.querySelector(
    ".button_set_theme_abcdef_menu"
  );
  let ButtonSetThemeAmbianceMenu = document.querySelector(
    ".button_set_theme_ambiance_menu"
  );
  let ButtonSetThemeAmbianceMobileMenu = document.querySelector(
    ".button_set_theme_ambiance_mobile_menu"
  );
  let ButtonSetThemeAyuDarkMenu = document.querySelector(
    ".button_set_theme_ayu_dark_menu"
  );
  let ButtonSetThemeAyuMirageMenu = document.querySelector(
    ".button_set_theme_ayu_mirage_menu"
  );
  let ButtonSetThemeBaseDarkMenu = document.querySelector(
    ".button_set_theme_base_dark_menu"
  );
  let ButtonSetThemeBaseLightMenu = document.querySelector(
    ".button_set_theme_base_light_menu"
  );
  let ButtonSetThemeBespinMenu = document.querySelector(
    ".button_set_theme_bespin_menu"
  );
  let ButtonSetThemeBlackBoardMenu = document.querySelector(
    ".button_set_theme_black_board_menu"
  );
  let ButtonSetThemeCobaltMenu = document.querySelector(
    ".button_set_theme_cobalt_menu"
  );
  let ButtonSetThemeColorForthMenu = document.querySelector(
    ".button_set_theme_color_forth_menu"
  );
  let ButtonSetThemeDarculaMenu = document.querySelector(
    ".button_set_theme_darcula_menu"
  );
  let ButtonSetThemeDraculaMenu = document.querySelector(
    ".button_set_theme_dracula_menu"
  );
  let ButtonSetThemeDuotoneDarkMenu = document.querySelector(
    ".button_set_theme_duotone_dark_menu"
  );
  let ButtonSetThemeDuotoneLightMenu = document.querySelector(
    ".button_set_theme_duotone_light_menu"
  );
  let ButtonSetThemeEclipseMenu = document.querySelector(
    ".button_set_theme_eclipse_menu"
  );
  let ButtonSetThemeElegantMenu = document.querySelector(
    ".button_set_theme_elegant_menu"
  );
  let ButtonSetThemeErlangDarkMenu = document.querySelector(
    ".button_set_theme_erlang_dark_menu"
  );
  let ButtonSetThemeGruvboxDarkMenu = document.querySelector(
    ".button_set_theme_gruvbox_dark_menu"
  );
  let ButtonSetThemeHopscotchMenu = document.querySelector(
    ".button_set_theme_hopscotch_menu"
  );
  let ButtonSetThemeIcecoderMenu = document.querySelector(
    ".button_set_theme_icecoder_menu"
  );
  let ButtonSetThemeIdeaMenu = document.querySelector(
    ".button_set_theme_idea_menu"
  );
  let ButtonSetThemeIsotopeMenu = document.querySelector(
    ".button_set_theme_isotope_menu"
  );
  let ButtonSetThemeLesserDarkMenu = document.querySelector(
    ".button_set_theme_lesser_dark_menu"
  );
  let ButtonSetThemeLiquiByteMenu = document.querySelector(
    ".button_set_theme_liqui_byte_menu"
  );
  let ButtonSetThemeLucarioMenu = document.querySelector(
    ".button_set_theme_lucario_menu"
  );
  let ButtonSetThemeMaterialMenu = document.querySelector(
    ".button_set_theme_material_menu"
  );
  let ButtonSetThemeMaterialDarkerMenu = document.querySelector(
    ".button_set_theme_material_darker_menu"
  );
  let ButtonSetThemeMaterialOceanMenu = document.querySelector(
    ".button_set_theme_material_ocean_menu"
  );
  let ButtonSetThemeMaterialPalenightMenu = document.querySelector(
    ".button_set_theme_material_palenight_menu"
  );
  let ButtonSetThemeMboMenu = document.querySelector(
    ".button_set_theme_mbo_menu"
  );
  let ButtonSetThemeMdnLikeMenu = document.querySelector(
    ".button_set_theme_mdn_like_menu"
  );
  let ButtonSetThemeMidnightMenu = document.querySelector(
    ".button_set_theme_midnight_menu"
  );
  let ButtonSetThemeMonokaiMenu = document.querySelector(
    ".button_set_theme_monokai_menu"
  );
  let ButtonSetThemeMoxerMenu = document.querySelector(
    ".button_set_theme_moxer_menu"
  );
  let ButtonSetThemeNeatMenu = document.querySelector(
    ".button_set_theme_neat_menu"
  );
  let ButtonSetThemeNeoMenu = document.querySelector(
    ".button_set_theme_neo_menu"
  );
  let ButtonSetThemeNordMenu = document.querySelector(
    ".button_set_theme_nord_menu"
  );
  let ButtonSetThemePandaSyntaxMenu = document.querySelector(
    ".button_set_theme_panda_syntax_menu"
  );
  let ButtonSetThemeParaisoDarkMenu = document.querySelector(
    ".button_set_theme_paraiso_dark_menu"
  );
  let ButtonSetThemeParaisoLightMenu = document.querySelector(
    ".button_set_theme_paraiso_light_menu"
  );
  let ButtonSetThemePastelOnDarkMenu = document.querySelector(
    ".button_set_theme_pastel_on_dark_menu"
  );
  let ButtonSetThemeRailscastsMenu = document.querySelector(
    ".button_set_theme_railscasts_menu"
  );
  let ButtonSetThemeRubyblueMenu = document.querySelector(
    ".button_set_theme_rubyblue_menu"
  );
  let ButtonSetThemeSetiMenu = document.querySelector(
    ".button_set_theme_seti_menu"
  );
  let ButtonSetThemeShadowFoxMenu = document.querySelector(
    ".button_set_theme_shadow_fox_menu"
  );
  let ButtonSetThemeSolarizedMenu = document.querySelector(
    ".button_set_theme_solarized_menu"
  );
  let ButtonSetThemeSsmsMenu = document.querySelector(
    ".button_set_theme_ssms_menu"
  );
  let ButtonSetThemeMatrixMenu = document.querySelector(
    ".button_set_theme_matrix_menu"
  );
  let ButtonSetThemeTomorrowNightBrightMenu = document.querySelector(
    ".button_set_theme_tomorrow_night_bright_menu"
  );
  let ButtonSetThemeTomorrowNightEightiesMenu = document.querySelector(
    ".button_set_theme_tomorrow_night_eighties_menu"
  );
  let ButtonSetThemeTtcnMenu = document.querySelector(
    ".button_set_theme_ttcn_menu"
  );
  let ButtonSetThemeTwilightMenu = document.querySelector(
    ".button_set_theme_twilight_menu"
  );
  let ButtonSetThemeVibrantInkMenu = document.querySelector(
    ".button_set_theme_vibrant_ink_menu"
  );
  let ButtonSetThemeXqDarkMenu = document.querySelector(
    ".button_set_theme_xq_dark_menu"
  );
  let ButtonSetThemeXqLightMenu = document.querySelector(
    ".button_set_theme_xq_light_menu"
  );
  let ButtonSetThemeYetiMenu = document.querySelector(
    ".button_set_theme_yeti_menu"
  );
  let ButtonSetThemeYonceMenu = document.querySelector(
    ".button_set_theme_yonce_menu"
  );
  let ButtonSetThemeZenburnMenu = document.querySelector(
    ".button_set_theme_zenburn_menu"
  );
  let ButtonAboutMenu = document.querySelector(".button_about_menu");
  let ButtonDonateMenu = document.querySelector(".button_donate_menu");
  //////////////////////////// End Section Variables For Menu
  ///////////////////////////////////////////////////////////// End Section Variables

  ///////////////////////////////////////////////////////////// Start Section Code Mirror
  EditorCodeMirror = CodeMirror(DivEditor, {
    theme: "darcula",
    lineNumbers: true,
    smartIndent: true,
    tabSize: 4,
    matchBrackets: true,
    indentWithTabs: true,
    debug: true,
    tabindex: 4,
    keyMap: "sublime",
    autofocus: true,
    addModeClass: true,
    showTrailingSpace: true,
    search: true,
    searchArgs: true,
    highlightSelectionMatches: true,
    searchOverlay: true,
    comment: true,
    indentUnit: 4,
    scrollPastEnd: true,
    autoCloseTags: true,
    enableSearchTools: true,
    enableCodeFolding: true,
    foldGutter: true,
    autoFormatOnModeChange: true,
    enableCodeFormatting: true,
    autoFormatOnStart: true,
    autoCloseBrackets: true,
    showSearchButton: true,
    dragDrop: true,
    newlineAndIndentContinueMarkdownList: true,
    autoFormatOnUncomment: true,
    showFormatButton: true,
    showCommentButton: true,
    indent: true,
    showUncommentButton: true,
    showAutoCompleteButton: true,
    highlightMatches: true,
    showCursorWhenSelecting: true,
    overlay: true,
    multiplex: true,
    showHint: true,
    styleSelectedText: true,
    styleActiveLine: true,
    selectionPointer: true,
    ContinueComments: true,
    fullScreen: true,
    annotateScrollbar: true,
    rulers: true,
    tern: true,
    spellcheck: true,
    gutters: [
      "CodeMirror-linenumbers",
      "CodeMirror-foldgutter",
      "CodeMirror-lint-markers",
    ],
    lint: true,
    matchTags: {
      bothTags: true,
    },
    extraKeys: {
      "Ctrl-Space": "autocomplete",
    },
  });
  let EditorInMenu = document.querySelector("#editor .CodeMirror textarea");
  let CodeMirrorInMenu = document.querySelector(".CodeMirror");
  CodeMirrorInMenu.style.height = "";
  ///////////////////////////////////////////////////////////// End Section Code Mirror

  ///////////////////////////////////////////////////////////// Start Section Set Functions Menus
  ButtonNewFileMenu.addEventListener("click", () => {
    FuncNewFile();
  });
  ButtonUndoMenu.addEventListener("click", () => {
    FuncUndo();
  });
  ButtonRedoMenu.addEventListener("click", () => {
    FuncRedo();
  });
  ButtonCutMenu.addEventListener("click", () => {
    FuncCut();
  });
  ButtonCopyMenu.addEventListener("click", () => {
    FuncCopy();
  });
  ButtonPasteMenu.addEventListener("click", () => {
    FuncPaste();
  });
  ButtonDeleteMenu.addEventListener("click", () => {
    FuncDelete();
  });
  ButtonDuplicateMenu.addEventListener("click", () => {
    FuncDuplicate();
  });
  ButtonSearchWithGoogleMenu.addEventListener("click", () => {
    FuncSearchWithGoogle();
  });
  ButtonFindMenu.addEventListener("click", () => {
    FuncFind();
  });
  ButtonFindNexMenu.addEventListener("click", () => {
    FuncFindNext();
  });
  ButtonFindPrevMenu.addEventListener("click", () => {
    FuncFindPrev();
  });
  ButtonReplaceMenu.addEventListener("click", () => {
    FuncReplace();
  });
  ButtonReplaceAllMenu.addEventListener("click", () => {
    FuncReplaceAll();
  });
  ButtonSelectAllMenu.addEventListener("click", () => {
    FuncSelectAll();
  });
  ButtonCreateTemplateHtmlMenu.addEventListener("click", () => {
    FuncHTML();
  });
  ButtonCreateTemplateCssMenu.addEventListener("click", () => {
    FuncCss();
  });
  ButtonCreateTemplateJavaScriptMenu.addEventListener("click", () => {
    FuncJavaScript();
  });
  ButtonCreateTemplateSqlMenu.addEventListener("click", () => {
    FuncSql();
  });
  ButtonCreateTemplateSassMenu.addEventListener("click", () => {
    FuncSass();
  });
  ButtonCreateTemplatePhpMenu.addEventListener("click", () => {
    FuncPhp();
  });
  ButtonCreateTemplatePythonMenu.addEventListener("click", () => {
    FuncPython();
  });
  ButtonCreateTemplateCppMenu.addEventListener("click", () => {
    FuncCpp();
  });
  ButtonCreateTemplateCSharpMenu.addEventListener("click", () => {
    FuncCSharp();
  });
  ButtonCreateTemplateKivyMenu.addEventListener("click", () => {
    FuncKivy();
  });
  ButtonCreateTemplateJavaMenu.addEventListener("click", () => {
    FuncJava();
  });
  ButtonCreateTemplateKotlinMenu.addEventListener("click", () => {
    FuncKotlin();
  });
  ButtonCreateTemplateXmlMenu.addEventListener("click", () => {
    FuncXml();
  });
  ButtonCreateTemplateTypeScriptMenu.addEventListener("click", () => {
    FuncTypeScript();
  });
  ButtonCreateTemplateGoMenu.addEventListener("click", () => {
    FuncGo();
  });
  ButtonCreateTemplateCythonMenu.addEventListener("click", () => {
    FuncCython();
  });
  ButtonCreateTemplateDMenu.addEventListener("click", () => {
    FuncD();
  });
  ButtonCreateTemplateDiffMenu.addEventListener("click", () => {
    FuncDiff();
  });
  ButtonCreateTemplateLiveSCriptMenu.addEventListener("click", () => {
    FuncLiveScript();
  });
  ButtonCreateTemplateLuaMenu.addEventListener("click", () => {
    FuncLua();
  });
  ButtonStatusBarMenu.addEventListener("click", () => {
    FuncStatusBar();
  });
  ButtonLiveWrappingMenu.addEventListener("click", () => {
    FuncLineWrapping();
  });
  ButtonFormatAllCodeMenu.addEventListener("click", () => {
    FuncFormatAllCode();
  });
  ButtonCommentMenu.addEventListener("click", () => {
    FuncToggleComment();
  });
  ButtonEmacsMenu.addEventListener("click", () => {
    FuncEmacs();
  });
  ButtonSublimeMenu.addEventListener("click", () => {
    FuncSublime();
  });
  ButtonVimMenu.addEventListener("click", () => {
    FuncVim();
  });
  ButtonSetLanguageChineseMenu.addEventListener("click", () => {
    DivStatusBarForNameFile.innerHTML = "文件名 :";
    DivStatusBarForModeFile.innerHTML = "模式 :";
    DivStatusBarForLineCol.innerHTML = "行 / 列 :";
    StatusBarForLockLock.setAttribute("title", "锁定页面打开");
    StatusBarForLockOpen.setAttribute("title", "锁定页面");
    StatusBarForSetModeFile.setAttribute("title", "设置模式文件");
  });
  ButtonSetLanguageSpanishMenu.addEventListener("click", () => {
    DivStatusBarForNameFile.innerHTML = "Nombre del archivo :";
    DivStatusBarForModeFile.innerHTML = "Modo :";
    DivStatusBarForLineCol.innerHTML = "Línea / Columna :";
    StatusBarForLockLock.setAttribute("title", "Bloquear apertura de página");
    StatusBarForLockOpen.setAttribute("title", "Página de bloqueo");
    StatusBarForSetModeFile.setAttribute(
      "title",
      "Archivo de modo de configuración"
    );
  });
  ButtonSetLanguageEnglishMenu.addEventListener("click", () => {
    DivStatusBarForNameFile.innerHTML = "File Name :";
    DivStatusBarForModeFile.innerHTML = "Mode :";
    DivStatusBarForLineCol.innerHTML = "Line / Column :";
    StatusBarForLockLock.setAttribute("title", "Lock Page Opening");
    StatusBarForLockOpen.setAttribute("title", "Locking Page");
    StatusBarForSetModeFile.setAttribute("title", "Set Mode File");
  });
  ButtonSetLanguageHindiMenu.addEventListener("click", () => {
    DivStatusBarForNameFile.innerHTML = "फ़ाइल का नाम :";
    DivStatusBarForModeFile.innerHTML = "मोड :";
    DivStatusBarForLineCol.innerHTML = "लाइन / कॉलम :";
    StatusBarForLockLock.setAttribute("title", "लॉक पेज ओपनिंग");
    StatusBarForLockOpen.setAttribute("title", "लॉकिंग पेज");
    StatusBarForSetModeFile.setAttribute("title", "मोड फ़ाइल सेट करें");
  });
  ButtonSetLanguagePersianMenu.addEventListener("click", () => {
    DivStatusBarForNameFile.innerHTML = "نام فایل :";
    DivStatusBarForModeFile.innerHTML = "نوع :";
    DivStatusBarForLineCol.innerHTML = "ستون / خط :";
    StatusBarForLockLock.setAttribute("title", "بازکردن قفل صفحه");
    StatusBarForLockOpen.setAttribute("title", "قفل کردن صفحه");
    StatusBarForSetModeFile.setAttribute("title", "ست کردن مود فایل");
  });
  ButtonSetLanguageGermanMenu.addEventListener("click", () => {
    DivStatusBarForNameFile.innerHTML = "Dateiname :";
    DivStatusBarForModeFile.innerHTML = "Modus :";
    DivStatusBarForLineCol.innerHTML = "Zeile / Spalte :";
    StatusBarForLockLock.setAttribute("title", "Seitenöffnung sperren");
    StatusBarForLockOpen.setAttribute("title", "Sperrseite");
    StatusBarForSetModeFile.setAttribute("title", "Set-Modus-Datei");
  });
  ButtonSetLanguageFrenchMenu.addEventListener("click", () => {
    DivStatusBarForNameFile.innerHTML = "Nom de fichier :";
    DivStatusBarForModeFile.innerHTML = "Mode :";
    DivStatusBarForLineCol.innerHTML = "Ligne / Colonne :";
    StatusBarForLockLock.setAttribute(
      "title",
      "Verrouiller l'ouverture de la page"
    );
    StatusBarForLockOpen.setAttribute("title", "Page de verrouillage");
    StatusBarForSetModeFile.setAttribute("title", "Définir le fichier de mode");
  });
  ButtonSetLanguagePortugueseMenu.addEventListener("click", () => {
    DivStatusBarForNameFile.innerHTML = "Nome do arquivo :";
    DivStatusBarForModeFile.innerHTML = "Modo :";
    DivStatusBarForLineCol.innerHTML = "Coluna / linha :";
    StatusBarForLockLock.setAttribute("title", "Bloquear a abertura da página");
    StatusBarForLockOpen.setAttribute("title", "Página de bloqueio");
    StatusBarForSetModeFile.setAttribute(
      "title",
      "Arquivo de modo de definição"
    );
  });
  ButtonSetLanguageRussianMenu.addEventListener("click", () => {
    DivStatusBarForNameFile.innerHTML = "Имя файла :";
    DivStatusBarForModeFile.innerHTML = "Режим :";
    DivStatusBarForLineCol.innerHTML = "Строка / столбец :";
    StatusBarForLockLock.setAttribute(
      "title",
      "Заблокировать открытие страницы"
    );
    StatusBarForLockOpen.setAttribute("title", "Страница блокировки");
    StatusBarForSetModeFile.setAttribute("title", "Файл настроек режима");
  });
  ButtonSetThemeDayMenu.addEventListener("click", () => {
    FuncDay();
  });
  ButtonSetThemeNightMenu.addEventListener("click", () => {
    Func3024Night();
  });
  ButtonSetThemeAbbottMenu.addEventListener("click", () => {
    FuncAbbott();
  });
  ButtonSetThemeAbcdefMenu.addEventListener("click", () => {
    FuncABCDef();
  });
  ButtonSetThemeAmbianceMenu.addEventListener("click", () => {
    FuncAmbiance();
  });
  ButtonSetThemeAmbianceMobileMenu.addEventListener("click", () => {
    FuncAmbianceMobile();
  });
  ButtonSetThemeAyuDarkMenu.addEventListener("click", () => {
    FuncAyuDark();
  });
  ButtonSetThemeAyuMirageMenu.addEventListener("click", () => {
    FuncAyuMirage();
  });
  ButtonSetThemeBaseDarkMenu.addEventListener("click", () => {
    FuncBaseDark();
  });
  ButtonSetThemeBaseLightMenu.addEventListener("click", () => {
    FuncBaseLight();
  });
  ButtonSetThemeBespinMenu.addEventListener("click", () => {
    FuncBespin();
  });
  ButtonSetThemeBlackBoardMenu.addEventListener("click", () => {
    FuncBlackBoard();
  });
  ButtonSetThemeCobaltMenu.addEventListener("click", () => {
    FuncCobalt();
  });
  ButtonSetThemeColorForthMenu.addEventListener("click", () => {
    FuncColorForth();
  });
  ButtonSetThemeDarculaMenu.addEventListener("click", () => {
    FuncDarcula();
  });
  ButtonSetThemeDraculaMenu.addEventListener("click", () => {
    FuncDracula();
  });
  ButtonSetThemeDuotoneDarkMenu.addEventListener("click", () => {
    FuncDuotoneDark();
  });
  ButtonSetThemeDuotoneLightMenu.addEventListener("click", () => {
    FuncDuotoneLight();
  });
  ButtonSetThemeEclipseMenu.addEventListener("click", () => {
    FuncEclipse();
  });
  ButtonSetThemeElegantMenu.addEventListener("click", () => {
    FuncElegant();
  });
  ButtonSetThemeErlangDarkMenu.addEventListener("click", () => {
    FuncErlangDark();
  });
  ButtonSetThemeGruvboxDarkMenu.addEventListener("click", () => {
    FuncGruvboxDark();
  });
  ButtonSetThemeHopscotchMenu.addEventListener("click", () => {
    FuncHopscotch();
  });
  ButtonSetThemeIcecoderMenu.addEventListener("click", () => {
    FuncIcecoder();
  });
  ButtonSetThemeIdeaMenu.addEventListener("click", () => {
    FuncIdea();
  });
  ButtonSetThemeIsotopeMenu.addEventListener("click", () => {
    FuncIsotope();
  });
  ButtonSetThemeLesserDarkMenu.addEventListener("click", () => {
    FuncLesserDark();
  });
  ButtonSetThemeLiquiByteMenu.addEventListener("click", () => {
    FuncLiquiByte();
  });
  ButtonSetThemeLucarioMenu.addEventListener("click", () => {
    FuncLucario();
  });
  ButtonSetThemeMaterialMenu.addEventListener("click", () => {
    FuncMaterial();
  });
  ButtonSetThemeMaterialDarkerMenu.addEventListener("click", () => {
    FuncMaterialDarker();
  });
  ButtonSetThemeMaterialOceanMenu.addEventListener("click", () => {
    FuncMaterialOcean();
  });
  ButtonSetThemeMaterialPalenightMenu.addEventListener("click", () => {
    FuncMaterialPalenight();
  });
  ButtonSetThemeMboMenu.addEventListener("click", () => {
    FuncMbo();
  });
  ButtonSetThemeMdnLikeMenu.addEventListener("click", () => {
    FuncMdnLike();
  });
  ButtonSetThemeMidnightMenu.addEventListener("click", () => {
    FuncMidnight();
  });
  ButtonSetThemeMonokaiMenu.addEventListener("click", () => {
    FuncMonokai();
  });
  ButtonSetThemeMoxerMenu.addEventListener("click", () => {
    FuncMoxer();
  });
  ButtonSetThemeNeatMenu.addEventListener("click", () => {
    FuncNeat();
  });
  ButtonSetThemeNeoMenu.addEventListener("click", () => {
    FuncNeo();
  });
  ButtonSetThemeNordMenu.addEventListener("click", () => {
    FuncNord();
  });
  ButtonSetThemePandaSyntaxMenu.addEventListener("click", () => {
    FuncPandaSyntax();
  });
  ButtonSetThemeParaisoDarkMenu.addEventListener("click", () => {
    FuncParaisoDark();
  });
  ButtonSetThemeParaisoLightMenu.addEventListener("click", () => {
    FuncParaisoLight();
  });
  ButtonSetThemePastelOnDarkMenu.addEventListener("click", () => {
    FuncPastelOnDark();
  });
  ButtonSetThemeRailscastsMenu.addEventListener("click", () => {
    FuncRailscasts();
  });
  ButtonSetThemeRubyblueMenu.addEventListener("click", () => {
    FuncRubyblue();
  });
  ButtonSetThemeSetiMenu.addEventListener("click", () => {
    FuncSeti();
  });
  ButtonSetThemeShadowFoxMenu.addEventListener("click", () => {
    FuncShadowFox();
  });
  ButtonSetThemeSolarizedMenu.addEventListener("click", () => {
    FuncSolarized();
  });
  ButtonSetThemeSsmsMenu.addEventListener("click", () => {
    FuncSsms();
  });
  ButtonSetThemeMatrixMenu.addEventListener("click", () => {
    FuncMatrix();
  });
  ButtonSetThemeTomorrowNightBrightMenu.addEventListener("click", () => {
    FuncTomorrowNightBright();
  });
  ButtonSetThemeTomorrowNightEightiesMenu.addEventListener("click", () => {
    FuncTomorrowNightEighties();
  });
  ButtonSetThemeTtcnMenu.addEventListener("click", () => {
    FuncTtcn();
  });
  ButtonSetThemeTwilightMenu.addEventListener("click", () => {
    FuncTwilight();
  });
  ButtonSetThemeVibrantInkMenu.addEventListener("click", () => {
    FuncVibrantInk();
  });
  ButtonSetThemeXqDarkMenu.addEventListener("click", () => {
    FuncXqDark();
  });
  ButtonSetThemeXqLightMenu.addEventListener("click", () => {
    FuncXqLight();
  });
  ButtonSetThemeYetiMenu.addEventListener("click", () => {
    FuncYeti();
  });
  ButtonSetThemeYonceMenu.addEventListener("click", () => {
    FuncYonce();
  });
  ButtonSetThemeZenburnMenu.addEventListener("click", () => {
    FuncZenburn();
  });
  ButtonAboutMenu.addEventListener("click", () => {
    alert(`Another : Amir Mohammad ;
    Address Github : https://github.com/amirmohammad0000 ;
    Version App : 1.0.0 ;`);
  });
  ButtonDonateMenu.addEventListener("click", () => {
    alert(`Hi, this is an open source program. If you are satisfied with this program, it is great.You can give us a small donation and pay us a little money.So that we can create other and better open source projects, and you have supported open source projects with this payment, and you have supported the openness of such projects. ;
    Account Number Payeer : P1033138596 ;
    Bitcoin : 39EfFAs4KFUizf2v3gRLR9hDBVVLCkB6VK ;`);
  });
  ///////////////////////////////////////////////////////////// End Section Set Functions Menus

  ///////////////////////////////////////////////////////////// Start Section Show Auto Complete
  document.addEventListener("keypress", () => {
    EditorCodeMirror.showHint();
  });
  ///////////////////////////////////////////////////////////// End Section Show Auto Complete

  ///////////////////////////////////////////////////////////// Start Section Functions
  ////////////////////////////////// Start Section Set Select Mode Files
  SelectModeFile.addEventListener("change", () => {
    FuncSetModeFiles("E:\\project\\project\\script." + SelectModeFile.value);
  });
  ////////////////////////////////// End Section Set Select Mode Files

  ////////////////////////////////// Start Section Set Mode Files
  const FuncSetModeFiles = (FilePathOpen) => {
    let FileNameLength = FilePathOpen.split("\\").length - 1;
    let FileName = FilePathOpen.split("\\")[FileNameLength];
    let ModeFile = FileName.split(".")[1];
    switch (ModeFile) {
      case "apl": {
        EditorCodeMirror.setOption("mode", "text/apl");
        break;
      }
      case "asn1": {
        EditorCodeMirror.setOption("mode", "text/x-ttcn-asn");
        break;
      }
      case "ael": {
        EditorCodeMirror.setOption("mode", "text/x-asterisk");
        break;
      }
      case "bf": {
        EditorCodeMirror.setOption("mode", "text/x-brainfuck");
        break;
      }
      case "c": {
        EditorCodeMirror.setOption("mode", "text/x-csrc");
        break;
      }
      case "cpp": {
        EditorCodeMirror.setOption("mode", "text/x-c++src");
        break;
      }
      case "cxx": {
        EditorCodeMirror.setOption("mode", "text/x-c++src");
        break;
      }
      case "CXX": {
        EditorCodeMirror.setOption("mode", "text/x-c++src");
        break;
      }
      case "java": {
        EditorCodeMirror.setOption("mode", "text/x-java");
        break;
      }
      case "jar": {
        EditorCodeMirror.setOption("mode", "text/x-java");
        break;
      }
      case "jsp": {
        EditorCodeMirror.setOption("mode", "text/x-java");
        break;
      }
      case "cs": {
        EditorCodeMirror.setOption("mode", "text/x-csharp");
        break;
      }
      case "h": {
        EditorCodeMirror.setOption("mode", "text/x-objectivec");
        break;
      }
      case "m": {
        EditorCodeMirror.setOption("mode", "text/x-objectivec");
        break;
      }
      case "mm": {
        EditorCodeMirror.setOption("mode", "text/x-objectivec");
        break;
      }
      case "M": {
        EditorCodeMirror.setOption("mode", "text/x-objectivec");
        break;
      }
      case "scala": {
        EditorCodeMirror.setOption("mode", "text/x-scala");
        break;
      }
      case "vert": {
        EditorCodeMirror.setOption("mode", "text/x-vertex");
        break;
      }
      case "frag": {
        EditorCodeMirror.setOption("mode", "x-shader/x-fragment");
        break;
      }
      case "squirrel": {
        EditorCodeMirror.setOption("mode", "text/x-squirrel");
        break;
      }
      case "ceylon": {
        EditorCodeMirror.setOption("mode", "text/x-ceylon");
        break;
      }
      case "clj": {
        EditorCodeMirror.setOption("mode", "text/x-clojure");
        break;
      }
      case "edn": {
        EditorCodeMirror.setOption("mode", "text/x-gss");
        break;
      }
      case "cmake": {
        EditorCodeMirror.setOption("mode", "text/x-cmake");
        break;
      }
      case "coffee": {
        EditorCodeMirror.setOption("mode", "application/vnd.coffeescript");
        break;
      }
      case "coffee": {
        EditorCodeMirror.setOption("mode", "text/coffeescript");
        break;
      }
      case "coffee": {
        EditorCodeMirror.setOption("mode", "text/x-coffeescript");
        break;
      }
      case "lisp": {
        EditorCodeMirror.setOption("mode", "text/x-common-lisp");
        break;
      }
      case "lsp": {
        EditorCodeMirror.setOption("mode", "text/x-common-lisp");
        break;
      }
      case "rpt": {
        EditorCodeMirror.setOption("mode", "text/x-crystal");
        break;
      }
      case "css": {
        EditorCodeMirror.setOption("mode", "text/css");
        break;
      }
      case "scss": {
        EditorCodeMirror.setOption("mode", "text/x-scss");
        break;
      }
      case "less": {
        EditorCodeMirror.setOption("mode", "text/x-less");
        break;
      }
      case "cypher": {
        EditorCodeMirror.setOption("mode", "application/x-cypher-query");
        break;
      }
      case "py": {
        EditorCodeMirror.setOption("mode", "text/x-python");
        break;
      }
      case "pyx": {
        EditorCodeMirror.setOption("mode", "text/x-cython");
        break;
      }
      case "d": {
        EditorCodeMirror.setOption("mode", "text/x-d");
        break;
      }
      case "djt": {
        EditorCodeMirror.setOption("mode", "text/x-django");
        break;
      }
      case "dockerfile ": {
        EditorCodeMirror.setOption("mode", "text/x-dockerfile");
        break;
      }
      case "diff": {
        EditorCodeMirror.setOption("mode", "text/x-diff");
        break;
      }
      case "dtd": {
        EditorCodeMirror.setOption("mode", "application/xml-dtd");
        break;
      }
      case "lid": {
        EditorCodeMirror.setOption("mode", "text/x-dylan");
        break;
      }
      case "js": {
        EditorCodeMirror.setOption("mode", "application/ecmascript");
        break;
      }
      case "ecl": {
        EditorCodeMirror.setOption("mode", "text/x-ecl");
        break;
      }
      case "e": {
        EditorCodeMirror.setOption("mode", "text/x-eiffel");
        break;
      }
      case "elm": {
        EditorCodeMirror.setOption("mode", "text/x-elm");
        break;
      }
      case "erl": {
        EditorCodeMirror.setOption("mode", "text/x-erlang");
        break;
      }
      case "yaws": {
        EditorCodeMirror.setOption("mode", "text/x-erlang");
        break;
      }
      case "factor": {
        EditorCodeMirror.setOption("mode", "text/x-factor");
        break;
      }
      case "fcl": {
        EditorCodeMirror.setOption("mode", "text/x-fcl");
        break;
      }
      case "f": {
        EditorCodeMirror.setOption("mode", "text/x-forth");
        break;
      }
      case "for": {
        EditorCodeMirror.setOption("mode", "text/x-forth");
        break;
      }
      case "4th": {
        EditorCodeMirror.setOption("mode", "text/x-fortran");
        break;
      }
      case "cmi": {
        EditorCodeMirror.setOption("mode", "text/x-ocaml");
        break;
      }
      case "fs": {
        EditorCodeMirror.setOption("mode", "text/x-fsharp");
        break;
      }
      case "s": {
        EditorCodeMirror.setOption("mode", "text/x-gas");
        break;
      }
      case "feature": {
        EditorCodeMirror.setOption("mode", "text/x-feature");
        break;
      }
      case "go": {
        EditorCodeMirror.setOption("mode", "text/x-go");
        break;
      }
      case "groovy": {
        EditorCodeMirror.setOption("mode", "text/x-groovy");
        break;
      }
      case "haml": {
        EditorCodeMirror.setOption("mode", "text/x-haml");
        break;
      }
      case "hbs": {
        EditorCodeMirror.setOption("mode", "text/x-handlebars-template");
        break;
      }
      case "hs": {
        EditorCodeMirror.setOption("mode", "text/x-haskell");
        break;
      }
      case "lhs": {
        EditorCodeMirror.setOption("mode", "text/x-literate-haskell");
        break;
      }
      case "hx": {
        EditorCodeMirror.setOption("mode", "text/x-haxe");
        break;
      }
      case "hxml": {
        EditorCodeMirror.setOption("mode", "text/x-hxml");
        break;
      }
      case "cs": {
        EditorCodeMirror.setOption("mode", "application/x-aspx");
        break;
      }
      case "asp": {
        EditorCodeMirror.setOption("mode", "application/x-aspx");
        break;
      }
      case "aspx": {
        EditorCodeMirror.setOption("mode", "application/x-aspx");
        break;
      }
      case "ejs": {
        EditorCodeMirror.setOption("mode", "application/x-ejs");
        break;
      }
      case "jsp": {
        EditorCodeMirror.setOption("mode", "application/x-jsp");
        break;
      }
      case "erb": {
        EditorCodeMirror.setOption("mode", "application/x-erb");
        break;
      }
      case "http": {
        EditorCodeMirror.setOption("mode", "message/http");
        break;
      }
      case "idl": {
        EditorCodeMirror.setOption("mode", "text/x-idl");
        break;
      }
      case "js": {
        EditorCodeMirror.setOption("mode", "text/javascript");
        break;
      }
      case "js": {
        EditorCodeMirror.setOption("mode", "application/javascript");
        break;
      }
      case "js": {
        EditorCodeMirror.setOption("mode", "application/x-javascript");
        break;
      }
      case "js": {
        EditorCodeMirror.setOption("mode", "text/ecmascript");
        break;
      }
      case "js": {
        EditorCodeMirror.setOption("mode", "application/ecmascript");
        break;
      }
      case "json": {
        EditorCodeMirror.setOption(
          "mode",
          "application/jsonapplication/x-json"
        );
        break;
      }
      case "json": {
        EditorCodeMirror.setOption("mode", "application/manifest+json");
        break;
      }
      case "json": {
        EditorCodeMirror.setOption("mode", "application/ld+json");
        break;
      }
      case "ts": {
        EditorCodeMirror.setOption("mode", "text/typescript");
        break;
      }
      case "ts": {
        EditorCodeMirror.setOption("mode", "application/typescript");
        break;
      }
      case "jl": {
        EditorCodeMirror.setOption("mode", "text/x-julia");
        break;
      }
      case "ls": {
        EditorCodeMirror.setOption("mode", "text/x-livescript");
        break;
      }
      case "lua": {
        EditorCodeMirror.setOption("mode", "text/x-lua");
        break;
      }
      case "md": {
        EditorCodeMirror.setOption("mode", "text/x-markdown");
        break;
      }
      case "m": {
        EditorCodeMirror.setOption("mode", "text/x-mathematica");
        break;
      }
      case "mbox": {
        EditorCodeMirror.setOption("mode", "application/mbox");
        break;
      }
      case "mrc": {
        EditorCodeMirror.setOption("mode", "text/mirc");
        break;
      }
      case "ini": {
        EditorCodeMirror.setOption("mode", "text/mirc");
        break;
      }
      case "mo": {
        EditorCodeMirror.setOption("mode", "text/x-modelica");
        break;
      }
      case "mscgen": {
        EditorCodeMirror.setOption("mode", "text/x-mscgen");
        break;
      }
      case "msc": {
        EditorCodeMirror.setOption("mode", "text/x-mscgen");
        break;
      }
      case "xu": {
        EditorCodeMirror.setOption("mode", "text/x-xu");
        break;
      }
      case "mscgen": {
        EditorCodeMirror.setOption("mode", "text/x-msgenny");
        break;
      }
      case "msc": {
        EditorCodeMirror.setOption("mode", "text/x-msgenny");
        break;
      }
      case "nginx": {
        EditorCodeMirror.setOption("mode", "text/x-nginx-conf");
        break;
      }
      case "nsi": {
        EditorCodeMirror.setOption("mode", "text/x-nsis");
        break;
      }
      case "pl": {
        EditorCodeMirror.setOption("mode", "application/n-quads");
        break;
      }
      case "f#": {
        EditorCodeMirror.setOption("mode", "text/x-fsharp");
        break;
      }
      case "m": {
        EditorCodeMirror.setOption("mode", "text/x-octave");
        break;
      }
      case "oz": {
        EditorCodeMirror.setOption("mode", "text/x-oz");
        break;
      }
      case "p": {
        EditorCodeMirror.setOption("mode", "text/x-pascal");
        break;
      }
      case "pas": {
        EditorCodeMirror.setOption("mode", "text/x-pascal");
        break;
      }
      case "pascal": {
        EditorCodeMirror.setOption("mode", "text/x-pascal");
        break;
      }
      case "perl": {
        EditorCodeMirror.setOption("mode", "text/x-perl");
        break;
      }
      case "asc": {
        EditorCodeMirror.setOption("mode", "application/pgp");
        break;
      }
      case "asc": {
        EditorCodeMirror.setOption("mode", "application/pgp-encrypted");
        break;
      }
      case "asc": {
        EditorCodeMirror.setOption("mode", "application/pgp-keys");
        break;
      }
      case "asc": {
        EditorCodeMirror.setOption("mode", "application/pgp-signature");
        break;
      }
      case "php": {
        EditorCodeMirror.setOption("mode", "application/x-httpd-php");
        break;
      }
      case "php": {
        EditorCodeMirror.setOption("mode", "text/x-php");
        break;
      }
      case "pig": {
        EditorCodeMirror.setOption("mode", "text/x-pig");
        break;
      }
      case "ps1": {
        EditorCodeMirror.setOption("mode", "application/x-powershell");
        break;
      }
      case "ps2": {
        EditorCodeMirror.setOption("mode", "application/x-powershell");
        break;
      }
      case "ps3": {
        EditorCodeMirror.setOption("mode", "application/x-powershell");
        break;
      }
      case "properties": {
        EditorCodeMirror.setOption("mode", "text/x-properties");
        break;
      }
      case "properties": {
        EditorCodeMirror.setOption("mode", "text/x-ini");
        break;
      }
      case "proto": {
        EditorCodeMirror.setOption("mode", "text/x-protobuf");
        break;
      }
      case "pug": {
        EditorCodeMirror.setOption("mode", "text/x-pug");
        break;
      }
      case "jade": {
        EditorCodeMirror.setOption("mode", "text/x-jade");
        break;
      }
      case "puppet": {
        EditorCodeMirror.setOption("mode", "text/x-puppet");
        break;
      }
      case "q": {
        EditorCodeMirror.setOption("mode", "text/x-q");
        break;
      }
      case "r": {
        EditorCodeMirror.setOption("mode", "text/x-rsrc");
        break;
      }
      case "spec": {
        EditorCodeMirror.setOption("mode", "text/x-rpm-spec");
        break;
      }
      case "spec": {
        EditorCodeMirror.setOption("mode", "text/x-rpm-changes");
        break;
      }
      case "rst": {
        EditorCodeMirror.setOption("mode", "text/x-rst");
        break;
      }
      case "rb": {
        EditorCodeMirror.setOption("mode", "text/x-ruby");
        break;
      }
      case "rs": {
        EditorCodeMirror.setOption("mode", "text/x-rustsrc");
        break;
      }
      case "rlib": {
        EditorCodeMirror.setOption("mode", "text/x-rustsrc");
        break;
      }
      case "sas": {
        EditorCodeMirror.setOption("mode", "text/x-sas");
        break;
      }
      case "sass": {
        EditorCodeMirror.setOption("mode", "text/x-sass");
        break;
      }
      case "xlsm": {
        EditorCodeMirror.setOption("mode", "text/x-spreadsheet");
        break;
      }
      case "xls": {
        EditorCodeMirror.setOption("mode", "text/x-spreadsheet");
        break;
      }
      case "xlsx": {
        EditorCodeMirror.setOption("mode", "text/x-spreadsheet");
        break;
      }
      case "scm": {
        EditorCodeMirror.setOption("mode", "text/x-scheme");
        break;
      }
      case "sh": {
        EditorCodeMirror.setOption("mode", "text/x-sh");
        break;
      }
      case "sh": {
        EditorCodeMirror.setOption("mode", "application/x-sh");
        break;
      }
      case "sieve": {
        EditorCodeMirror.setOption("mode", "application/sieve");
        break;
      }
      case "slim": {
        EditorCodeMirror.setOption("mode", "application/x-slim");
        break;
      }
      case "smalltalk": {
        EditorCodeMirror.setOption("mode", "text/x-stsrc");
        break;
      }
      case "stsrc": {
        EditorCodeMirror.setOption("mode", "text/x-stsrc");
        break;
      }
      case "tpl": {
        EditorCodeMirror.setOption("mode", "text/x-smarty");
        break;
      }
      case "solr": {
        EditorCodeMirror.setOption("mode", "text/x-solr");
        break;
      }
      case "soy": {
        EditorCodeMirror.setOption("mode", "text/x-soy");
        break;
      }
      case "styl": {
        EditorCodeMirror.setOption("mode", "text/x-styl");
        break;
      }
      case "sql": {
        EditorCodeMirror.setOption("mode", "text/x-sql");
        break;
      }
      case "sql": {
        EditorCodeMirror.setOption("mode", "text/x-mysql");
        break;
      }
      case "sql": {
        EditorCodeMirror.setOption("mode", "text/x-mariadb");
        break;
      }
      case "sql": {
        EditorCodeMirror.setOption("mode", "text/x-cassandra");
        break;
      }
      case "sql": {
        EditorCodeMirror.setOption("mode", "text/x-plsql");
        break;
      }
      case "sql": {
        EditorCodeMirror.setOption("mode", "text/x-mssql");
        break;
      }
      case "sql": {
        EditorCodeMirror.setOption("mode", "text/x-hive");
        break;
      }
      case "sql": {
        EditorCodeMirror.setOption("mode", "text/x-pgsql");
        break;
      }
      case "sql": {
        EditorCodeMirror.setOption("mode", "text/x-gql");
        break;
      }
      case "sql": {
        EditorCodeMirror.setOption("mode", "text/x-gpsql");
        break;
      }
      case "sql": {
        EditorCodeMirror.setOption("mode", "text/x-esper");
        break;
      }
      case "sparql": {
        EditorCodeMirror.setOption("mode", "application/sparql-query");
        break;
      }
      case "swift": {
        EditorCodeMirror.setOption("mode", "text/x-swift");
        break;
      }
      case "stex": {
        EditorCodeMirror.setOption("mode", "text/x-stex");
        break;
      }
      case "tcl": {
        EditorCodeMirror.setOption("mode", "text/x-tcl");
        break;
      }
      case "textile": {
        EditorCodeMirror.setOption("mode", "text/x-textile");
        break;
      }
      case "tid": {
        EditorCodeMirror.setOption("mode", "text/x-tiddlywiki");
        break;
      }
      case "toml": {
        EditorCodeMirror.setOption("mode", "text/x-toml");
        break;
      }
      case "tornado": {
        EditorCodeMirror.setOption("mode", "text/x-tornado");
        break;
      }
      case "troff": {
        EditorCodeMirror.setOption("mode", "troff");
        break;
      }
      case "ttcn": {
        EditorCodeMirror.setOption("mode", "text/x-ttcn");
        break;
      }
      case "ttcn3": {
        EditorCodeMirror.setOption("mode", "text/x-ttcn3");
        break;
      }
      case "ttcnpp": {
        EditorCodeMirror.setOption("mode", "text/x-ttcnpp");
        break;
      }
      case "cfg": {
        EditorCodeMirror.setOption("mode", "text/x-ttcn-cfg");
        break;
      }
      case "turtle": {
        EditorCodeMirror.setOption("mode", "text/turtle");
        break;
      }
      case "vb": {
        EditorCodeMirror.setOption("mode", "text/x-vb");
        break;
      }
      case "vbs": {
        EditorCodeMirror.setOption("mode", "text/vbscript");
        break;
      }
      case "vm": {
        EditorCodeMirror.setOption("mode", "text/velocity");
        break;
      }
      case "vm": {
        EditorCodeMirror.setOption("mode", "text/x-verilog");
        break;
      }
      case "sv": {
        EditorCodeMirror.setOption("mode", "text/x-systemverilog");
        break;
      }
      case "vhd": {
        EditorCodeMirror.setOption("mode", "text/x-vhdl");
        break;
      }
      case "vue": {
        EditorCodeMirror.setOption("mode", "text/x-vue");
        break;
      }
      case "webidl": {
        EditorCodeMirror.setOption("mode", "text/x-webidl");
        break;
      }
      case "wasm": {
        EditorCodeMirror.setOption("mode", "text/webassembly");
        break;
      }
      case "xml": {
        EditorCodeMirror.setOption("mode", "application/xml");
        break;
      }
      case "html": {
        EditorCodeMirror.setOption("mode", "text/html");
        break;
      }
      case "htm": {
        EditorCodeMirror.setOption("mode", "text/html");
        break;
      }
      case "xquery": {
        EditorCodeMirror.setOption("mode", "application/xquery");
        break;
      }
      case "yacas": {
        EditorCodeMirror.setOption("mode", "text/x-yacas");
        break;
      }
      case "yaml": {
        EditorCodeMirror.setOption("mode", "text/x-yaml");
        break;
      }
      case "z80": {
        EditorCodeMirror.setOption("mode", "text/x-z80");
        break;
      }
      case "ez80": {
        EditorCodeMirror.setOption("mode", "text/x-ez80");
        break;
      }
      default: {
        break;
      }
    }
  };
  ////////////////////////////////// End Section Set Mode Files

  ////////////////////////////////// Start Section Lock
  Lock_Lock.addEventListener("click", () => {
    Lock_Lock.style.display = "none";
    Lock_Open.style.display = "block";
    EditorCodeMirror.setOption("readOnly", false);
  });
  Lock_Open.addEventListener("click", () => {
    Lock_Lock.style.display = "block";
    Lock_Open.style.display = "none";
    EditorCodeMirror.setOption("readOnly", true);
  });
  CodeMirrorInMenu.addEventListener("keyup", () => {
    if (EditorCodeMirror.getOption("readOnly") === true) {
      alert(
        "Read-only mode is enabled, you must press the lock button to write"
      );
    }
  });
  ////////////////////////////////// End Section Lock

  ////////////////////////////////// Start Section Set Star Save
  EditorInMenu.addEventListener("input", () => {
    document.title = document.title + "*";
    document.title = document.title.replace("**", "*");
  });
  ////////////////////////////////// End Section Set Star Save

  ////////////////////////////////// Start Functions Get Line Number And Get Line Columns
  CodeMirrorInMenu.addEventListener("input", () => {
    GetLineColumnNumber();
  });
  CodeMirrorInMenu.addEventListener("keyup", () => {
    GetLineColumnNumber();
  });
  CodeMirrorInMenu.addEventListener("mousedown", () => {
    GetLineColumnNumber();
  });
  const GetLineColumnNumber = () => {
    let LineCol = EditorCodeMirror.doc.getCursor();
    LinesColumns.innerHTML = `${LineCol.line + 1} : ${LineCol.ch}`;
  };
  GetLineColumnNumber();
  ////////////////////////////////// End Functions Get Line Number And Get Line Columns

  ////////////////////////////////// Start Functions Files
  const FuncNewFile = () => {
    document.title = "Editor Code - Untitled.txt";
    EditorCodeMirror.setValue("");
    FileNameInMenu.innerHTML = "Untitled";
    ModeFileInMenu.innerHTML = "txt";
  };
  ////////////////////////////////// End Functions Files

  ////////////////////////////////// Start Functions Edit
  const FuncUndo = () => {
    EditorCodeMirror.undo();
  };
  const FuncRedo = () => {
    EditorCodeMirror.redo();
  };
  const FuncCut = () => {
    let Value = EditorCodeMirror.getSelection();
    navigator.clipboard.writeText(Value);
    EditorCodeMirror.replaceSelection("");
  };
  const FuncCopy = () => {
    let Value = EditorCodeMirror.getSelection();
    navigator.clipboard.writeText(Value);
  };
  const FuncPaste = () => {};
  const FuncDelete = () => {
    EditorCodeMirror.replaceSelection("");
  };
  const FuncDuplicate = () => {
    let Selection = EditorCodeMirror.getSelection();
    if (Selection !== "") {
      EditorCodeMirror.doc.replaceSelection(Selection.repeat(2));
    } else {
      let LineCol = EditorCodeMirror.doc.getCursor();
      let ValueLine = EditorCodeMirror.doc.getLine(LineCol.line);
      EditorCodeMirror.doc.replaceSelection(
        `
` + ValueLine.repeat(1)
      );
    }
  };
  const FuncSearchWithGoogle = () => {
    window.open(
      "http://google.com/search?q=" + EditorCodeMirror.getSelection()
    );
  };
  const FuncFind = () => {
    EditorCodeMirror.execCommand("find");
  };
  const FuncFindNext = () => {
    EditorCodeMirror.execCommand("findNext");
  };
  const FuncFindPrev = () => {
    EditorCodeMirror.execCommand("findPrev");
  };
  const FuncReplace = () => {
    EditorCodeMirror.execCommand("replace");
  };
  const FuncReplaceAll = () => {
    EditorCodeMirror.execCommand("replaceAll");
  };
  const FuncSelectAll = () => {
    EditorCodeMirror.execCommand("selectAll");
  };
  ////////////////////////////////// End Functions Edit

  ////////////////////////////////// Start Functions Templates
  const FuncHTML = () => {
    document.title = "Editor Code - index.html";
    EditorCodeMirror.setValue(`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Title</title>
		<link rel="stylesheet" href="">
	</head>
	<body>
	</body>
	<script src=""></script>
</html>`);
    FileNameInMenu.innerHTML = "index";
    ModeFileInMenu.innerHTML = "html";
    EditorCodeMirror.setOption("mode", "text/html");
  };
  const FuncCss = () => {
    document.title = "Editor Code - style.css";
    EditorCodeMirror.setValue(`* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}`);
    FileNameInMenu.innerHTML = "style";
    ModeFileInMenu.innerHTML = "css";
    EditorCodeMirror.setOption("mode", "text/css");
  };
  const FuncJavaScript = () => {
    document.title = "Editor Code - script.js";
    EditorCodeMirror.setValue("'use strict';");
    FileNameInMenu.innerHTML = "script";
    ModeFileInMenu.innerHTML = "js";
    EditorCodeMirror.setOption("mode", "text/javascript");
  };
  const FuncSql = () => {
    document.title = "Editor Code - main.sql";
    EditorCodeMirror.setValue("");
    FileNameInMenu.innerHTML = "main";
    ModeFileInMenu.innerHTML = "sql";
    EditorCodeMirror.setOption("mode", "text/x-sql");
  };
  const FuncSass = () => {
    document.title = "Editor Code - style.scss";
    EditorCodeMirror.setValue(`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "JetBrains Mono", serif;
    font-size: 16px;
}`);
    FileNameInMenu.innerHTML = "style";
    ModeFileInMenu.innerHTML = "scss";
    EditorCodeMirror.setOption("mode", "text/x-scss");
  };
  const FuncPhp = () => {
    document.title = "Editor Code - index.html";
    EditorCodeMirror.setValue("<?php  ?>");
    FileNameInMenu.innerHTML = "index";
    ModeFileInMenu.innerHTML = "php";
    EditorCodeMirror.setOption("mode", "application/x-httpd-php");
  };
  const FuncPython = () => {
    document.title = "Editor Code - main.py";
    EditorCodeMirror.setValue("print('Hello, World!')");
    FileNameInMenu.innerHTML = "main";
    ModeFileInMenu.innerHTML = "py";
    EditorCodeMirror.setOption("mode", "text/x-python");
  };
  const FuncCpp = () => {
    document.title = "Editor Code - main.cpp";
    EditorCodeMirror.setValue(`#include <iostream>
using namespace std;
int main()
{
	
}`);
    FileNameInMenu.innerHTML = "main";
    ModeFileInMenu.innerHTML = "cpp";
    EditorCodeMirror.setOption("mode", "text/x-c++src");
  };
  const FuncCSharp = () => {
    document.title = "Editor Code - main.cs";
    EditorCodeMirror.setValue(`#using System;
namespace HelloWorld;
{
	class Program
	{
		static void Main(string[] args);
		{
			
		}
	}
}`);
    FileNameInMenu.innerHTML = "main";
    ModeFileInMenu.innerHTML = "cs";
    EditorCodeMirror.setOption("mode", "text/x-csharp");
  };
  const FuncKivy = () => {
    document.title = "Editor Code - style.kv";
    EditorCodeMirror.setValue("");
    FileNameInMenu.innerHTML = "style";
    ModeFileInMenu.innerHTML = "ky";
  };
  const FuncJava = () => {
    document.title = "Editor Code - script.jar";
    EditorCodeMirror.setValue(`public class Main {
	public static void main(String[] args) {
		System.out.println("Hello World");
	}
}`);
    FileNameInMenu.innerHTML = "script";
    ModeFileInMenu.innerHTML = "jar";
    EditorCodeMirror.setOption("mode", "text/x-java");
  };
  const FuncKotlin = () => {
    document.title = "Editor Code - script.kt";
    EditorCodeMirror.setValue(`fun main() {
	
}`);
    FileNameInMenu.innerHTML = "script";
    ModeFileInMenu.innerHTML = "kt";
    EditorCodeMirror.setOption("mode", "text/x-squirrel");
  };
  const FuncXml = () => {
    document.title = "Editor Code - index.xml";
    EditorCodeMirror.setValue(`<?xml version="1.0" encoding="UTF-8"?>
<note>
	<to>Tove</to>
	<from>Jani</from>
	<heading>Reminder</heading>
	<body>Don't forget me this weekend!</body>
</note>`);
    FileNameInMenu.innerHTML = "index";
    ModeFileInMenu.innerHTML = "xml";
    EditorCodeMirror.setOption("mode", "application/xml");
  };
  const FuncTypeScript = () => {
    document.title = "Editor Code - script.ts";
    EditorCodeMirror.setValue("");
    FileNameInMenu.innerHTML = "script";
    ModeFileInMenu.innerHTML = "ts";
    EditorCodeMirror.setOption("mode", "text/typescript");
  };
  const FuncGo = () => {
    document.title = "Editor Code - script.go";
    EditorCodeMirror.setValue(`package main
import "fmt"
func main() {

}`);
    FileNameInMenu.innerHTML = "script";
    ModeFileInMenu.innerHTML = "go";
    EditorCodeMirror.setOption("mode", "text/x-go");
  };
  const FuncCython = () => {
    document.title = "Editor Code - script.pyx";
    EditorCodeMirror.setValue("");
    FileNameInMenu.innerHTML = "script";
    ModeFileInMenu.innerHTML = "pyx";
    EditorCodeMirror.setOption("mode", "text/x-cython");
  };
  const FuncD = () => {
    document.title = "Editor Code - script.d";
    EditorCodeMirror.setValue(`import std.stdio, std.array, std.algorithm;
void main()
{
	stdin ;
}`);
    FileNameInMenu.innerHTML = "script";
    ModeFileInMenu.innerHTML = "d";
    EditorCodeMirror.setOption("mode", "text/x-d");
  };
  const FuncDiff = () => {
    document.title = "Editor Code - script.diff";
    EditorCodeMirror.setValue("");
    FileNameInMenu.innerHTML = "script";
    ModeFileInMenu.innerHTML = "diff";
    EditorCodeMirror.setOption("mode", "text/x-diff");
  };
  const FuncLiveScript = () => {
    document.title = "Editor Code - script.ls";
    EditorCodeMirror.setValue("");
    FileNameInMenu.innerHTML = "script";
    ModeFileInMenu.innerHTML = "ls";
    EditorCodeMirror.setOption("mode", "text/x-livescript");
  };
  const FuncLua = () => {
    document.title = "Editor Code - script.lua";
    EditorCodeMirror.setValue("");
    FileNameInMenu.innerHTML = "script";
    ModeFileInMenu.innerHTML = "lua";
    EditorCodeMirror.setOption("mode", "text/x-lua");
  };
  ////////////////////////////////// End Functions Templates

  ////////////////////////////////// Start Functions View
  const FuncStatusBar = () => {
    if (StateStatusBar === true) {
      CodeMirrorInMenu.style.height = "100%";
      StatusBarInMenu.style.bottom = "-35px";
      IconCheckStatusBar.setAttribute(
        "class",
        "icon_check_status_bar_section_inner_edit_menu_editor_code"
      );
      IconCheckStatusBar.style.margin = "0 20.5px";
      StateStatusBar = false;
    } else {
      CodeMirrorInMenu.style.height = "calc(100% - 65px)";
      StatusBarInMenu.style.bottom = "0";
      IconCheckStatusBar.setAttribute(
        "class",
        "fas fa-check icon_check_status_bar_section_inner_edit_menu_editor_code"
      );
      IconCheckStatusBar.style.margin = "0 13px";
      StateStatusBar = true;
    }
  };
  const FuncLineWrapping = () => {
    if (StateLineWrapping === true) {
      EditorCodeMirror.setOption("lineWrapping", true);
      StateLineWrapping = false;
    } else {
      EditorCodeMirror.setOption("lineWrapping", false);
      StateLineWrapping = true;
    }
  };
  ////////////////////////////////// End Functions View

  ////////////////////////////////// Start Functions Code
  const FuncFormatAllCode = () => {
    let Cursor = EditorCodeMirror.getCursor();
    let totalLines = EditorCodeMirror.lineCount();
    let totalChars = EditorCodeMirror.getValue().length;
    EditorCodeMirror.autoFormatRange(
      { line: 0, ch: 0 },
      { line: totalLines, ch: totalChars }
    );
    EditorCodeMirror.setCursor(Cursor.line, Cursor.ch);
  };
  const FuncToggleComment = () => {
    EditorCodeMirror.toggleComment(getSelection());
  };
  ////////////////////////////////// End Functions Code

  ////////////////////////////////// Start Functions KeyMap
  const FuncEmacs = () => {
    EditorCodeMirror.setOption("keyMap", "emacs");
  };
  const FuncSublime = () => {
    EditorCodeMirror.setOption("keyMap", "sublime");
  };
  const FuncVim = () => {
    EditorCodeMirror.setOption("keyMap", "vim");
  };
  ////////////////////////////////// Start Functions KeyMap

  ////////////////////////////////// Start Functions Theme
  const FuncDay = () => {
    EditorCodeMirror.setOption("theme", "3024-day");
  };
  const Func3024Night = () => {
    EditorCodeMirror.setOption("theme", "3024-night");
  };
  const FuncAbbott = () => {
    EditorCodeMirror.setOption("theme", "abbott");
  };
  const FuncABCDef = () => {
    EditorCodeMirror.setOption("theme", "abcdef");
  };
  const FuncAmbiance = () => {
    EditorCodeMirror.setOption("theme", "ambiance");
  };
  const FuncAmbianceMobile = () => {
    EditorCodeMirror.setOption("theme", "ambiance-mobile");
  };
  const FuncAyuDark = () => {
    EditorCodeMirror.setOption("theme", "ayu-dark");
  };
  const FuncAyuMirage = () => {
    EditorCodeMirror.setOption("theme", "ayu-mirage");
  };
  const FuncBaseDark = () => {
    EditorCodeMirror.setOption("theme", "base16-dark");
  };
  const FuncBaseLight = () => {
    EditorCodeMirror.setOption("theme", "base16-light");
  };
  const FuncBespin = () => {
    EditorCodeMirror.setOption("theme", "bespin");
  };
  const FuncBlackBoard = () => {
    EditorCodeMirror.setOption("theme", "blackboard");
  };
  const FuncCobalt = () => {
    EditorCodeMirror.setOption("theme", "cobalt");
  };
  const FuncColorForth = () => {
    EditorCodeMirror.setOption("theme", "colorforth");
  };
  const FuncDarcula = () => {
    EditorCodeMirror.setOption("theme", "darcula");
  };
  const FuncDracula = () => {
    EditorCodeMirror.setOption("theme", "dracula");
  };
  const FuncDuotoneDark = () => {
    EditorCodeMirror.setOption("theme", "duotone-dark");
  };
  const FuncDuotoneLight = () => {
    EditorCodeMirror.setOption("theme", "duotone-light");
  };
  const FuncEclipse = () => {
    EditorCodeMirror.setOption("theme", "eclipse");
  };
  const FuncElegant = () => {
    EditorCodeMirror.setOption("theme", "elegant");
  };
  const FuncErlangDark = () => {
    EditorCodeMirror.setOption("theme", "erlang-dark");
  };
  const FuncGruvboxDark = () => {
    EditorCodeMirror.setOption("theme", "gruvbox-dark");
  };
  const FuncHopscotch = () => {
    EditorCodeMirror.setOption("theme", "hopscotch");
  };
  const FuncIcecoder = () => {
    EditorCodeMirror.setOption("theme", "icecoder");
  };
  const FuncIdea = () => {
    EditorCodeMirror.setOption("theme", "idea");
  };
  const FuncIsotope = () => {
    EditorCodeMirror.setOption("theme", "isotope");
  };
  const FuncLesserDark = () => {
    EditorCodeMirror.setOption("theme", "lesser-dark");
  };
  const FuncLiquiByte = () => {
    EditorCodeMirror.setOption("theme", "liquibyte");
  };
  const FuncLucario = () => {
    EditorCodeMirror.setOption("theme", "lucario");
  };
  const FuncMaterial = () => {
    EditorCodeMirror.setOption("theme", "material");
  };
  const FuncMaterialDarker = () => {
    EditorCodeMirror.setOption("theme", "material-darker");
  };
  const FuncMaterialOcean = () => {
    EditorCodeMirror.setOption("theme", "material-ocean");
  };
  const FuncMaterialPalenight = () => {
    EditorCodeMirror.setOption("theme", "material-palenight");
  };
  const FuncMbo = () => {
    EditorCodeMirror.setOption("theme", "mbo");
  };
  const FuncMdnLike = () => {
    EditorCodeMirror.setOption("theme", "mdn-like");
  };
  const FuncMidnight = () => {
    EditorCodeMirror.setOption("theme", "midnight");
  };
  const FuncMonokai = () => {
    EditorCodeMirror.setOption("theme", "monokai");
  };
  const FuncMoxer = () => {
    EditorCodeMirror.setOption("theme", "moxer");
  };
  const FuncNeat = () => {
    EditorCodeMirror.setOption("theme", "neat");
  };
  const FuncNeo = () => {
    EditorCodeMirror.setOption("theme", "neo");
  };
  const FuncNord = () => {
    EditorCodeMirror.setOption("theme", "nord");
  };
  const FuncPandaSyntax = () => {
    EditorCodeMirror.setOption("theme", "panda-syntax");
  };
  const FuncParaisoDark = () => {
    EditorCodeMirror.setOption("theme", "paraiso-dark");
  };
  const FuncParaisoLight = () => {
    EditorCodeMirror.setOption("theme", "paraiso-light");
  };
  const FuncPastelOnDark = () => {
    EditorCodeMirror.setOption("theme", "pastel-on-dark");
  };
  const FuncRailscasts = () => {
    EditorCodeMirror.setOption("theme", "railscasts");
  };
  const FuncRubyblue = () => {
    EditorCodeMirror.setOption("theme", "rubyblue");
  };
  const FuncSeti = () => {
    EditorCodeMirror.setOption("theme", "seti");
  };
  const FuncShadowFox = () => {
    EditorCodeMirror.setOption("theme", "shadowfox");
  };
  const FuncSolarized = () => {
    EditorCodeMirror.setOption("theme", "solarized");
  };
  const FuncSsms = () => {
    EditorCodeMirror.setOption("theme", "ssms");
  };
  const FuncMatrix = () => {
    EditorCodeMirror.setOption("theme", "the-matrix");
  };
  const FuncTomorrowNightBright = () => {
    EditorCodeMirror.setOption("theme", "tomorrow-night-bright");
  };
  const FuncTomorrowNightEighties = () => {
    EditorCodeMirror.setOption("theme", "tomorrow-night-eighties");
  };
  const FuncTtcn = () => {
    EditorCodeMirror.setOption("theme", "ttcn");
  };
  const FuncTwilight = () => {
    EditorCodeMirror.setOption("theme", "twilight");
  };
  const FuncVibrantInk = () => {
    EditorCodeMirror.setOption("theme", "vibrant-ink");
  };
  const FuncXqDark = () => {
    EditorCodeMirror.setOption("theme", "xq-dark");
  };
  const FuncXqLight = () => {
    EditorCodeMirror.setOption("theme", "xq-light");
  };
  const FuncYeti = () => {
    EditorCodeMirror.setOption("theme", "yeti");
  };
  const FuncYonce = () => {
    EditorCodeMirror.setOption("theme", "yonce");
  };
  const FuncZenburn = () => {
    EditorCodeMirror.setOption("theme", "zenburn");
  };
  ////////////////////////////////// End Functions Theme
});
