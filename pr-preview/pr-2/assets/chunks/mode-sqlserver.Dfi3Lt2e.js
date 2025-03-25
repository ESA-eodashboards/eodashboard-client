import{g as c}from"./commonjsHelpers.BosuxZz1.js";function g(a,p){for(var A=0;A<p.length;A++){const r=p[A];if(typeof r!="string"&&!Array.isArray(r)){for(const L in r)if(L!=="default"&&!(L in a)){const n=Object.getOwnPropertyDescriptor(r,L);n&&Object.defineProperty(a,L,n.get?n:{enumerable:!0,get:()=>r[L]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var D={exports:{}};(function(a,p){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(A,r,L){var n=A("../lib/oop"),i=A("./text_highlight_rules").TextHighlightRules,o=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},o.getTagRule(),{defaultToken:"comment.doc.body",caseInsensitive:!0}]}};n.inherits(o,i),o.getTagRule=function(_){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},o.getStartRule=function(_){return{token:"comment.doc",regex:/\/\*\*(?!\/)/,next:_}},o.getEndRule=function(_){return{token:"comment.doc",regex:"\\*\\/",next:_}},r.DocCommentHighlightRules=o}),ace.define("ace/mode/sqlserver_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(A,r,L){var n=A("../lib/oop"),i=A("./doc_comment_highlight_rules").DocCommentHighlightRules,o=A("./text_highlight_rules").TextHighlightRules,_=function(){var E="ALL|AND|ANY|BETWEEN|EXISTS|IN|LIKE|NOT|OR|SOME";E+="|NULL|IS|APPLY|INNER|OUTER|LEFT|RIGHT|JOIN|CROSS";var R="OPENDATASOURCE|OPENQUERY|OPENROWSET|OPENXML|AVG|CHECKSUM_AGG|COUNT|COUNT_BIG|GROUPING|GROUPING_ID|MAX|MIN|STDEV|STDEVP|SUM|VAR|VARP|DENSE_RANK|NTILE|RANK|ROW_NUMBER@@DATEFIRST|@@DBTS|@@LANGID|@@LANGUAGE|@@LOCK_TIMEOUT|@@MAX_CONNECTIONS|@@MAX_PRECISION|@@NESTLEVEL|@@OPTIONS|@@REMSERVER|@@SERVERNAME|@@SERVICENAME|@@SPID|@@TEXTSIZE|@@VERSION|CAST|CONVERT|PARSE|TRY_CAST|TRY_CONVERT|TRY_PARSE@@CURSOR_ROWS|@@FETCH_STATUS|CURSOR_STATUS|@@DATEFIRST|@@LANGUAGE|CURRENT_TIMESTAMP|DATEADD|DATEDIFF|DATEFROMPARTS|DATENAME|DATEPART|DATETIME2FROMPARTS|DATETIMEFROMPARTS|DATETIMEOFFSETFROMPARTS|DAY|EOMONTH|GETDATE|GETUTCDATE|ISDATE|MONTH|SET DATEFIRST|SET DATEFORMAT|SET LANGUAGE|SMALLDATETIMEFROMPARTS|SP_HELPLANGUAGE|SWITCHOFFSET|SYSDATETIME|SYSDATETIMEOFFSET|SYSUTCDATETIME|TIMEFROMPARTS|TODATETIMEOFFSET|YEAR|DATETRUNC|CHOOSE|IIF|ABS|ACOS|ASIN|ATAN|ATN2|CEILING|COS|COT|DEGREES|EXP|FLOOR|LOG|LOG10|PI|POWER|RADIANS|RAND|ROUND|SIGN|SIN|SQRT|SQUARE|TAN|@@PROCID|APPLOCK_MODE|APPLOCK_TEST|APP_NAME|ASSEMBLYPROPERTY|COLUMNPROPERTY|COL_LENGTH|COL_NAME|DATABASEPROPERTYEX|DATABASE_PRINCIPAL_ID|DB_ID|DB_NAME|FILEGROUPPROPERTY|FILEGROUP_ID|FILEGROUP_NAME|FILEPROPERTY|FILE_ID|FILE_IDEX|FILE_NAME|FULLTEXTCATALOGPROPERTY|FULLTEXTSERVICEPROPERTY|INDEXKEY_PROPERTY|INDEXPROPERTY|INDEX_COL|OBJECTPROPERTY|OBJECTPROPERTYEX|OBJECT_DEFINITION|OBJECT_ID|OBJECT_NAME|OBJECT_SCHEMA_NAME|ORIGINAL_DB_NAME|PARSENAME|SCHEMA_ID|SCHEMA_NAME|SCOPE_IDENTITY|SERVERPROPERTY|STATS_DATE|TYPEPROPERTY|TYPE_ID|TYPE_NAME|CERTENCODED|CERTPRIVATEKEY|CURRENT_USER|DATABASE_PRINCIPAL_ID|HAS_PERMS_BY_NAME|IS_MEMBER|IS_ROLEMEMBER|IS_SRVROLEMEMBER|ORIGINAL_LOGIN|PERMISSIONS|PWDCOMPARE|PWDENCRYPT|SCHEMA_ID|SCHEMA_NAME|SESSION_USER|SUSER_ID|SUSER_NAME|SUSER_SID|SUSER_SNAME|SYS.FN_BUILTIN_PERMISSIONS|SYS.FN_GET_AUDIT_FILE|SYS.FN_MY_PERMISSIONS|SYSTEM_USER|USER_ID|USER_NAME|ASCII|CHAR|CHARINDEX|CONCAT|DIFFERENCE|FORMAT|LEN|LOWER|LTRIM|NCHAR|PATINDEX|QUOTENAME|REPLACE|REPLICATE|REVERSE|RTRIM|SOUNDEX|SPACE|STR|STUFF|SUBSTRING|UNICODE|UPPER|$PARTITION|@@ERROR|@@IDENTITY|@@PACK_RECEIVED|@@ROWCOUNT|@@TRANCOUNT|BINARY_CHECKSUM|CHECKSUM|CONNECTIONPROPERTY|CONTEXT_INFO|CURRENT_REQUEST_ID|ERROR_LINE|ERROR_MESSAGE|ERROR_NUMBER|ERROR_PROCEDURE|ERROR_SEVERITY|ERROR_STATE|FORMATMESSAGE|GETANSINULL|GET_FILESTREAM_TRANSACTION_CONTEXT|HOST_ID|HOST_NAME|ISNULL|ISNUMERIC|MIN_ACTIVE_ROWVERSION|NEWID|NEWSEQUENTIALID|ROWCOUNT_BIG|XACT_STATE|@@CONNECTIONS|@@CPU_BUSY|@@IDLE|@@IO_BUSY|@@PACKET_ERRORS|@@PACK_RECEIVED|@@PACK_SENT|@@TIMETICKS|@@TOTAL_ERRORS|@@TOTAL_READ|@@TOTAL_WRITE|FN_VIRTUALFILESTATS|PATINDEX|TEXTPTR|TEXTVALID|GREATEST|LEAST|GENERATE_SERIES|DATE_BUCKET|JSON_ARRAY|JSON_OBJECT|JSON_PATH_EXISTS|ISJSON|FIRST_VALUE|LAST_VALUE|COALESCE|NULLIF",e="BIGINT|BINARY|BIT|CHAR|CURSOR|DATE|DATETIME|DATETIME2|DATETIMEOFFSET|DECIMAL|FLOAT|HIERARCHYID|IMAGE|INTEGER|INT|MONEY|NCHAR|NTEXT|NUMERIC|NVARCHAR|REAL|SMALLDATETIME|SMALLINT|SMALLMONEY|SQL_VARIANT|TABLE|TEXT|TIME|TIMESTAMP|TINYINT|UNIQUEIDENTIFIER|VARBINARY|VARCHAR|XML",O="sp_addextendedproc|sp_addextendedproperty|sp_addmessage|sp_addtype|sp_addumpdevice|sp_add_data_file_recover_suspect_db|sp_add_log_file_recover_suspect_db|sp_altermessage|sp_attach_db|sp_attach_single_file_db|sp_autostats|sp_bindefault|sp_bindrule|sp_bindsession|sp_certify_removable|sp_clean_db_file_free_space|sp_clean_db_free_space|sp_configure|sp_control_plan_guide|sp_createstats|sp_create_plan_guide|sp_create_plan_guide_from_handle|sp_create_removable|sp_cycle_errorlog|sp_datatype_info|sp_dbcmptlevel|sp_dbmmonitoraddmonitoring|sp_dbmmonitorchangealert|sp_dbmmonitorchangemonitoring|sp_dbmmonitordropalert|sp_dbmmonitordropmonitoring|sp_dbmmonitorhelpalert|sp_dbmmonitorhelpmonitoring|sp_dbmmonitorresults|sp_db_increased_partitions|sp_delete_backuphistory|sp_depends|sp_describe_first_result_set|sp_describe_undeclared_parameters|sp_detach_db|sp_dropdevice|sp_dropextendedproc|sp_dropextendedproperty|sp_dropmessage|sp_droptype|sp_execute|sp_executesql|sp_getapplock|sp_getbindtoken|sp_help|sp_helpconstraint|sp_helpdb|sp_helpdevice|sp_helpextendedproc|sp_helpfile|sp_helpfilegroup|sp_helpindex|sp_helplanguage|sp_helpserver|sp_helpsort|sp_helpstats|sp_helptext|sp_helptrigger|sp_indexoption|sp_invalidate_textptr|sp_lock|sp_monitor|sp_prepare|sp_prepexec|sp_prepexecrpc|sp_procoption|sp_recompile|sp_refreshview|sp_releaseapplock|sp_rename|sp_renamedb|sp_resetstatus|sp_sequence_get_range|sp_serveroption|sp_setnetname|sp_settriggerorder|sp_spaceused|sp_tableoption|sp_unbindefault|sp_unbindrule|sp_unprepare|sp_updateextendedproperty|sp_updatestats|sp_validname|sp_who|sys.sp_merge_xtp_checkpoint_files|sys.sp_xtp_bind_db_resource_pool|sys.sp_xtp_checkpoint_force_garbage_collection|sys.sp_xtp_control_proc_exec_stats|sys.sp_xtp_control_query_exec_stats|sys.sp_xtp_unbind_db_resource_pool",T="ABSOLUTE|ACTION|ADA|ADD|ADMIN|AFTER|AGGREGATE|ALIAS|ALL|ALLOCATE|ALTER|AND|ANY|ARE|ARRAY|AS|ASC|ASENSITIVE|ASSERTION|ASYMMETRIC|AT|ATOMIC|AUTHORIZATION|BACKUP|BEFORE|BEGIN|BETWEEN|BIT_LENGTH|BLOB|BOOLEAN|BOTH|BREADTH|BREAK|BROWSE|BULK|BY|CALL|CALLED|CARDINALITY|CASCADE|CASCADED|CASE|CATALOG|CHARACTER|CHARACTER_LENGTH|CHAR_LENGTH|CHECK|CHECKPOINT|CLASS|CLOB|CLOSE|CLUSTERED|COALESCE|COLLATE|COLLATION|COLLECT|COLUMN|COMMIT|COMPLETION|COMPUTE|CONDITION|CONNECT|CONNECTION|CONSTRAINT|CONSTRAINTS|CONSTRUCTOR|CONTAINS|CONTAINSTABLE|CONTINUE|CORR|CORRESPONDING|COVAR_POP|COVAR_SAMP|CREATE|CROSS|CUBE|CUME_DIST|CURRENT|CURRENT_CATALOG|CURRENT_DATE|CURRENT_DEFAULT_TRANSFORM_GROUP|CURRENT_PATH|CURRENT_ROLE|CURRENT_SCHEMA|CURRENT_TIME|CURRENT_TRANSFORM_GROUP_FOR_TYPE|CYCLE|DATA|DATABASE|DBCC|DEALLOCATE|DEC|DECLARE|DEFAULT|DEFERRABLE|DEFERRED|DELETE|DENY|DEPTH|DEREF|DESC|DESCRIBE|DESCRIPTOR|DESTROY|DESTRUCTOR|DETERMINISTIC|DIAGNOSTICS|DICTIONARY|DISCONNECT|DISK|DISTINCT|DISTRIBUTED|DOMAIN|DOUBLE|DROP|DUMP|DYNAMIC|EACH|ELEMENT|ELSE|END|END-EXEC|EQUALS|ERRLVL|ESCAPE|EVERY|EXCEPT|EXCEPTION|EXEC|EXECUTE|EXISTS|EXIT|EXTERNAL|EXTRACT|FETCH|FILE|FILLFACTOR|FILTER|FIRST|FOR|FOREIGN|FORTRAN|FOUND|FREE|FREETEXT|FREETEXTTABLE|FROM|FULL|FULLTEXTTABLE|FUNCTION|FUSION|GENERAL|GET|GLOBAL|GO|GOTO|GRANT|GROUP|HAVING|HOLD|HOLDLOCK|HOST|HOUR|IDENTITY|IDENTITYCOL|IDENTITY_INSERT|IF|IGNORE|IMMEDIATE|IN|INCLUDE|INDEX|INDICATOR|INITIALIZE|INITIALLY|INNER|INOUT|INPUT|INSENSITIVE|INSERT|INTEGER|INTERSECT|INTERSECTION|INTERVAL|INTO|IS|ISOLATION|ITERATE|JOIN|KEY|KILL|LANGUAGE|LARGE|LAST|LATERAL|LEADING|LESS|LEVEL|LIKE|LIKE_REGEX|LIMIT|LINENO|LN|LOAD|LOCAL|LOCALTIME|LOCALTIMESTAMP|LOCATOR|MAP|MATCH|MEMBER|MERGE|METHOD|MINUTE|MOD|MODIFIES|MODIFY|MODULE|MULTISET|NAMES|NATIONAL|NATURAL|NCLOB|NEW|NEXT|NO|NOCHECK|NONCLUSTERED|NONE|NORMALIZE|NOT|NULL|NULLIF|OBJECT|OCCURRENCES_REGEX|OCTET_LENGTH|OF|OFF|OFFSETS|OLD|ON|ONLY|OPEN|OPERATION|OPTION|OR|ORDER|ORDINALITY|OUT|OUTER|OUTPUT|OVER|OVERLAPS|OVERLAY|PAD|PARAMETER|PARAMETERS|PARTIAL|PARTITION|PASCAL|PATH|PERCENT|PERCENTILE_CONT|PERCENTILE_DISC|PERCENT_RANK|PIVOT|PLAN|POSITION|POSITION_REGEX|POSTFIX|PRECISION|PREFIX|PREORDER|PREPARE|PRESERVE|PRIMARY|PRINT|PRIOR|PRIVILEGES|PROC|PROCEDURE|PUBLIC|RAISERROR|RANGE|READ|READS|READTEXT|RECONFIGURE|RECURSIVE|REF|REFERENCES|REFERENCING|REGR_AVGX|REGR_AVGY|REGR_COUNT|REGR_INTERCEPT|REGR_R2|REGR_SLOPE|REGR_SXX|REGR_SXY|REGR_SYY|RELATIVE|RELEASE|REPLICATION|RESTORE|RESTRICT|RESULT|RETURN|RETURNS|REVERT|REVOKE|ROLE|ROLLBACK|ROLLUP|ROUTINE|ROW|ROWCOUNT|ROWGUIDCOL|ROWS|RULE|SAVE|SAVEPOINT|SCHEMA|SCOPE|SCROLL|SEARCH|SECOND|SECTION|SECURITYAUDIT|SELECT|SEMANTICKEYPHRASETABLE|SEMANTICSIMILARITYDETAILSTABLE|SEMANTICSIMILARITYTABLE|SENSITIVE|SEQUENCE|SESSION|SET|SETS|SETUSER|SHUTDOWN|SIMILAR|SIZE|SOME|SPECIFIC|SPECIFICTYPE|SQL|SQLCA|SQLCODE|SQLERROR|SQLEXCEPTION|SQLSTATE|SQLWARNING|START|STATE|STATEMENT|STATIC|STATISTICS|STDDEV_POP|STDDEV_SAMP|STRUCTURE|SUBMULTISET|SUBSTRING_REGEX|STRING_SPLIT|SYMMETRIC|SYSTEM|TABLESAMPLE|TEMPORARY|TERMINATE|TEXTSIZE|THAN|THEN|TIMEZONE_HOUR|TIMEZONE_MINUTE|TO|TOP|TRAILING|TRAN|TRANSACTION|TRANSLATE|TRANSLATE_REGEX|TRANSLATION|TREAT|TRIGGER|TRIM|TRUNCATE|TSEQUAL|UESCAPE|UNDER|UNION|UNIQUE|UNKNOWN|UNNEST|UNPIVOT|UPDATE|UPDATETEXT|USAGE|USE|USER|USING|VALUE|VALUES|VARIABLE|VARYING|VAR_POP|VAR_SAMP|VIEW|WAITFOR|WHEN|WHENEVER|WHERE|WHILE|WIDTH_BUCKET|WINDOW|WITH|WITHIN|WITHIN GROUP|WITHOUT|WORK|WRITE|WRITETEXT|XMLAGG|XMLATTRIBUTES|XMLBINARY|XMLCAST|XMLCOMMENT|XMLCONCAT|XMLDOCUMENT|XMLELEMENT|XMLEXISTS|XMLFOREST|XMLITERATE|XMLNAMESPACES|XMLPARSE|XMLPI|XMLQUERY|XMLSERIALIZE|XMLTABLE|XMLTEXT|XMLVALIDATE|ZONE";T+="|KEEPIDENTITY|KEEPDEFAULTS|IGNORE_CONSTRAINTS|IGNORE_TRIGGERS|XLOCK|FORCESCAN|FORCESEEK|HOLDLOCK|NOLOCK|NOWAIT|PAGLOCK|READCOMMITTED|READCOMMITTEDLOCK|READPAST|READUNCOMMITTED|REPEATABLEREAD|ROWLOCK|SERIALIZABLE|SNAPSHOT|SPATIAL_WINDOW_MAX_CELLS|TABLOCK|TABLOCKX|UPDLOCK|XLOCK|IGNORE_NONCLUSTERED_COLUMNSTORE_INDEX|EXPAND|VIEWS|FAST|FORCE|KEEP|KEEPFIXED|MAXDOP|MAXRECURSION|OPTIMIZE|PARAMETERIZATION|SIMPLE|FORCED|RECOMPILE|ROBUST|PLAN|SPATIAL_WINDOW_MAX_CELLS|NOEXPAND|HINT",T+="|LOOP|HASH|MERGE|REMOTE",T+="|TRY|CATCH|THROW",T+="|TYPE",T=T.split("|"),T=T.filter(function(l,d,M){return E.split("|").indexOf(l)===-1&&R.split("|").indexOf(l)===-1&&e.split("|").indexOf(l)===-1}),T=T.sort().join("|");for(var I=this.createKeywordMapper({"constant.language":E,"storage.type":e,"support.function":R,"support.storedprocedure":O,keyword:T},"identifier",!0),S="SET ANSI_DEFAULTS|SET ANSI_NULLS|SET ANSI_NULL_DFLT_OFF|SET ANSI_NULL_DFLT_ON|SET ANSI_PADDING|SET ANSI_WARNINGS|SET ARITHABORT|SET ARITHIGNORE|SET CONCAT_NULL_YIELDS_NULL|SET CURSOR_CLOSE_ON_COMMIT|SET DATEFIRST|SET DATEFORMAT|SET DEADLOCK_PRIORITY|SET FIPS_FLAGGER|SET FMTONLY|SET FORCEPLAN|SET IDENTITY_INSERT|SET IMPLICIT_TRANSACTIONS|SET LANGUAGE|SET LOCK_TIMEOUT|SET NOCOUNT|SET NOEXEC|SET NUMERIC_ROUNDABORT|SET OFFSETS|SET PARSEONLY|SET QUERY_GOVERNOR_COST_LIMIT|SET QUOTED_IDENTIFIER|SET REMOTE_PROC_TRANSACTIONS|SET ROWCOUNT|SET SHOWPLAN_ALL|SET SHOWPLAN_TEXT|SET SHOWPLAN_XML|SET STATISTICS IO|SET STATISTICS PROFILE|SET STATISTICS TIME|SET STATISTICS XML|SET TEXTSIZE|SET XACT_ABORT".split("|"),t="READ UNCOMMITTED|READ COMMITTED|REPEATABLE READ|SNAPSHOP|SERIALIZABLE".split("|"),N=0;N<t.length;N++)S.push("SET TRANSACTION ISOLATION LEVEL "+t[N]);this.$rules={start:[{token:"string.start",regex:"'",next:[{token:"constant.language.escape",regex:/''/},{token:"string.end",next:"start",regex:"'"},{defaultToken:"string"}]},i.getStartRule("doc-start"),{token:"comment",regex:"--.*$"},{token:"comment",start:"/\\*",end:"\\*/"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:I,regex:"@{0,2}[a-zA-Z_$][a-zA-Z0-9_$]*\\b(?!])"},{token:"constant.class",regex:"@@?[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|=|\\*"},{token:"paren.lparen",regex:"[\\(]"},{token:"paren.rparen",regex:"[\\)]"},{token:"punctuation",regex:",|;"},{token:"text",regex:"\\s+"}],comment:[i.getTagRule(),{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment",caseInsensitive:!0}]};for(var N=0;N<S.length;N++)this.$rules.start.unshift({token:"set.statement",regex:S[N]});this.embedRules(i,"doc-",[i.getEndRule("start")]),this.normalizeRules();var s=[],C=function(l,d){l.forEach(function(M){s.push({name:M,value:M,score:0,meta:d})})};C(O.split("|"),"procedure"),C(E.split("|"),"operator"),C(R.split("|"),"function"),C(e.split("|"),"type"),C(S,"statement"),C(T.split("|"),"keyword"),this.completions=s};n.inherits(_,o),r.SqlHighlightRules=_}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(A,r,L){var n=A("../../lib/oop"),i=A("../../range").Range,o=A("./fold_mode").FoldMode,_=r.FoldMode=function(E){E&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+E.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+E.end)))};n.inherits(_,o),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(E,R,e){var O=E.getLine(e);if(this.singleLineBlockCommentRe.test(O)&&!this.startRegionRe.test(O)&&!this.tripleStarBlockCommentRe.test(O))return"";var T=this._getFoldWidgetBase(E,R,e);return!T&&this.startRegionRe.test(O)?"start":T},this.getFoldWidgetRange=function(E,R,e,O){var T=E.getLine(e);if(this.startRegionRe.test(T))return this.getCommentRegionBlock(E,T,e);var t=T.match(this.foldingStartMarker);if(t){var I=t.index;if(t[1])return this.openingBracketBlock(E,t[1],e,I);var S=E.getCommentFoldRange(e,I+t[0].length,1);return S&&!S.isMultiLine()&&(O?S=this.getSectionRange(E,e):R!="all"&&(S=null)),S}if(R!=="markbegin"){var t=T.match(this.foldingStopMarker);if(t){var I=t.index+t[0].length;return t[1]?this.closingBracketBlock(E,t[1],e,I):E.getCommentFoldRange(e,I,-1)}}},this.getSectionRange=function(E,R){var e=E.getLine(R),O=e.search(/\S/),T=R,I=e.length;R=R+1;for(var S=R,t=E.getLength();++R<t;){e=E.getLine(R);var N=e.search(/\S/);if(N!==-1){if(O>N)break;var s=this.getFoldWidgetRange(E,"all",R);if(s){if(s.start.row<=T)break;if(s.isMultiLine())R=s.end.row;else if(O==N)break}S=R}}return new i(T,I,S,E.getLine(S).length)},this.getCommentRegionBlock=function(E,R,e){for(var O=R.search(/\s*$/),T=E.getLength(),I=e,S=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,t=1;++e<T;){R=E.getLine(e);var N=S.exec(R);if(N&&(N[1]?t--:t++,!t))break}var s=e;if(s>I)return new i(I,O,s,R.length)}}).call(_.prototype)}),ace.define("ace/mode/folding/sqlserver",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/cstyle"],function(A,r,L){var n=A("../../lib/oop"),i=A("../../range").Range,o=A("./cstyle").FoldMode,_=r.FoldMode=function(){};n.inherits(_,o),(function(){this.foldingStartMarker=/(\bCASE\b|\bBEGIN\b)|^\s*(\/\*)/i,this.startRegionRe=/^\s*(\/\*|--)#?region\b/,this.getFoldWidgetRange=function(E,R,e,O){var T=E.getLine(e);if(this.startRegionRe.test(T))return this.getCommentRegionBlock(E,T,e);var I=T.match(this.foldingStartMarker);if(I){var S=I.index;if(I[1])return this.getBeginEndBlock(E,e,S,I[1]);var t=E.getCommentFoldRange(e,S+I[0].length,1);return t&&!t.isMultiLine()&&(O?t=this.getSectionRange(E,e):R!="all"&&(t=null)),t}},this.getBeginEndBlock=function(E,R,e,O){for(var T={row:R,column:e+O.length},I=E.getLength(),S,t=1,N=/(\bCASE\b|\bBEGIN\b)|(\bEND\b)/i;++R<I;){S=E.getLine(R);var s=N.exec(S);if(s&&(s[1]?t++:t--,!t))break}var C=R;if(C>T.row)return new i(T.row,T.column,C,S.length)}}).call(_.prototype)}),ace.define("ace/mode/sqlserver",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/sqlserver_highlight_rules","ace/mode/folding/sqlserver"],function(A,r,L){var n=A("../lib/oop"),i=A("./text").Mode,o=A("./sqlserver_highlight_rules").SqlHighlightRules,_=A("./folding/sqlserver").FoldMode,E=function(){this.HighlightRules=o,this.foldingRules=new _,this.$behaviour=this.$defaultBehaviour};n.inherits(E,i),(function(){this.lineCommentStart="--",this.blockComment={start:"/*",end:"*/"},this.getCompletions=function(R,e,O,T){return e.$mode.$highlightRules.completions},this.$id="ace/mode/sqlserver",this.snippetFileId="ace/snippets/sqlserver"}).call(E.prototype),r.Mode=E}),function(){ace.require(["ace/mode/sqlserver"],function(A){a&&(a.exports=A)})}()})(D);var P=D.exports;const U=c(P),u=g({__proto__:null,default:U},[P]);export{u as m};
