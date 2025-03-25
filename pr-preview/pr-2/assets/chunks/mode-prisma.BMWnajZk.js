import{g as v}from"./commonjsHelpers.BosuxZz1.js";function y(g,x){for(var n=0;n<x.length;n++){const a=x[n];if(typeof a!="string"&&!Array.isArray(a)){for(const m in a)if(m!=="default"&&!(m in g)){const d=Object.getOwnPropertyDescriptor(a,m);d&&Object.defineProperty(g,m,d.get?d:{enumerable:!0,get:()=>a[m]})}}}return Object.freeze(Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}))}var _={exports:{}};(function(g,x){ace.define("ace/mode/prisma_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(n,a,m){var d=n("../lib/oop"),f=n("./text_highlight_rules").TextHighlightRules,p=function(){this.$rules={start:[{include:"#triple_comment"},{include:"#double_comment"},{include:"#model_block_definition"},{include:"#config_block_definition"},{include:"#enum_block_definition"},{include:"#type_definition"}],"#model_block_definition":[{token:["source.prisma.embedded.source","storage.type.model.prisma","source.prisma.embedded.source","entity.name.type.model.prisma","source.prisma.embedded.source","punctuation.definition.tag.prisma"],regex:/^(\s*)(model|type)(\s+)([A-Za-z][\w]*)(\s+)({)/,push:[{token:"punctuation.definition.tag.prisma",regex:/\s*\}/,next:"pop"},{include:"#triple_comment"},{include:"#double_comment"},{include:"#field_definition"},{defaultToken:"source.prisma.embedded.source"}]}],"#enum_block_definition":[{token:["source.prisma.embedded.source","storage.type.enum.prisma","source.prisma.embedded.source","entity.name.type.enum.prisma","source.prisma.embedded.source","punctuation.definition.tag.prisma"],regex:/^(\s*)(enum)(\s+)([A-Za-z][\w]*)(\s+)({)/,push:[{token:"punctuation.definition.tag.prisma",regex:/\s*\}/,next:"pop"},{include:"#triple_comment"},{include:"#double_comment"},{include:"#enum_value_definition"},{defaultToken:"source.prisma.embedded.source"}]}],"#config_block_definition":[{token:["source.prisma.embedded.source","storage.type.config.prisma","source.prisma.embedded.source","entity.name.type.config.prisma","source.prisma.embedded.source","punctuation.definition.tag.prisma"],regex:/^(\s*)(generator|datasource)(\s+)([A-Za-z][\w]*)(\s+)({)/,push:[{token:"source.prisma.embedded.source",regex:/\s*\}/,next:"pop"},{include:"#triple_comment"},{include:"#double_comment"},{include:"#assignment"},{defaultToken:"source.prisma.embedded.source"}]}],"#assignment":[{token:["text","variable.other.assignment.prisma","text","keyword.operator.terraform","text"],regex:/^(\s*)(\w+)(\s*)(=)(\s*)/,push:[{token:"text",regex:/$/,next:"pop"},{include:"#value"},{include:"#double_comment_inline"}]}],"#field_definition":[{token:["text","variable.other.assignment.prisma","invalid.illegal.colon.prisma","text","support.type.primitive.prisma","keyword.operator.list_type.prisma","keyword.operator.optional_type.prisma","invalid.illegal.required_type.prisma"],regex:/^(\s*)(\w+)((?:\s*:)?)(\s+)(\w+)((?:\[\])?)((?:\?)?)((?:\!)?)/},{include:"#attribute_with_arguments"},{include:"#attribute"}],"#type_definition":[{token:["text","storage.type.type.prisma","text","entity.name.type.type.prisma","text","support.type.primitive.prisma"],regex:/^(\s*)(type)(\s+)(\w+)(\s*=\s*)(\w+)/},{include:"#attribute_with_arguments"},{include:"#attribute"}],"#enum_value_definition":[{token:["text","variable.other.assignment.prisma","text"],regex:/^(\s*)(\w+)(\s*$)/},{include:"#attribute_with_arguments"},{include:"#attribute"}],"#attribute_with_arguments":[{token:["entity.name.function.attribute.prisma","punctuation.definition.tag.prisma"],regex:/(@@?[\w\.]+)(\()/,push:[{token:"punctuation.definition.tag.prisma",regex:/\)/,next:"pop"},{include:"#named_argument"},{include:"#value"},{defaultToken:"source.prisma.attribute.with_arguments"}]}],"#attribute":[{token:"entity.name.function.attribute.prisma",regex:/@@?[\w\.]+/}],"#array":[{token:"source.prisma.array",regex:/\[/,push:[{token:"source.prisma.array",regex:/\]/,next:"pop"},{include:"#value"},{defaultToken:"source.prisma.array"}]}],"#value":[{include:"#array"},{include:"#functional"},{include:"#literal"}],"#functional":[{token:["support.function.functional.prisma","punctuation.definition.tag.prisma"],regex:/(\w+)(\()/,push:[{token:"punctuation.definition.tag.prisma",regex:/\)/,next:"pop"},{include:"#value"},{defaultToken:"source.prisma.functional"}]}],"#literal":[{include:"#boolean"},{include:"#number"},{include:"#double_quoted_string"},{include:"#identifier"}],"#identifier":[{token:"support.constant.constant.prisma",regex:/\b(?:\w)+\b/}],"#map_key":[{token:["variable.parameter.key.prisma","text","punctuation.definition.separator.key-value.prisma","text"],regex:/(\w+)(\s*)(:)(\s*)/}],"#named_argument":[{include:"#map_key"},{include:"#value"}],"#triple_comment":[{token:"comment.prisma",regex:/\/\/\//,push:[{token:"comment.prisma",regex:/$/,next:"pop"},{defaultToken:"comment.prisma"}]}],"#double_comment":[{token:"comment.prisma",regex:/\/\//,push:[{token:"comment.prisma",regex:/$/,next:"pop"},{defaultToken:"comment.prisma"}]}],"#double_comment_inline":[{token:"comment.prisma",regex:/\/\/[^$]*/}],"#boolean":[{token:"constant.language.boolean.prisma",regex:/\b(?:true|false)\b/}],"#number":[{token:"constant.numeric.prisma",regex:/(?:0(?:x|X)[0-9a-fA-F]*|(?:\+|-)?\b(?:[0-9]+\.?[0-9]*|\.[0-9]+)(?:(?:e|E)(?:\+|-)?[0-9]+)?)(?:[LlFfUuDdg]|UL|ul)?\b/}],"#double_quoted_string":[{token:"string.quoted.double.start.prisma",regex:/"/,push:[{token:"string.quoted.double.end.prisma",regex:/"/,next:"pop"},{include:"#string_interpolation"},{token:"string.quoted.double.prisma",regex:/[\w\-\/\._\\%@:\?=]+/},{defaultToken:"unnamed"}]}],"#string_interpolation":[{token:"keyword.control.interpolation.start.prisma",regex:/\$\{/,push:[{token:"keyword.control.interpolation.end.prisma",regex:/\s*\}/,next:"pop"},{include:"#value"},{defaultToken:"source.tag.embedded.source.prisma"}]}]},this.normalizeRules()};p.metaData={name:"Prisma",scopeName:"source.prisma"},d.inherits(p,f),a.PrismaHighlightRules=p}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(n,a,m){var d=n("../../lib/oop"),f=n("../../range").Range,p=n("./fold_mode").FoldMode,k=a.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};d.inherits(k,p),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,i){var s=e.getLine(i);if(this.singleLineBlockCommentRe.test(s)&&!this.startRegionRe.test(s)&&!this.tripleStarBlockCommentRe.test(s))return"";var o=this._getFoldWidgetBase(e,t,i);return!o&&this.startRegionRe.test(s)?"start":o},this.getFoldWidgetRange=function(e,t,i,s){var o=e.getLine(i);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(e,o,i);var r=o.match(this.foldingStartMarker);if(r){var u=r.index;if(r[1])return this.openingBracketBlock(e,r[1],i,u);var l=e.getCommentFoldRange(i,u+r[0].length,1);return l&&!l.isMultiLine()&&(s?l=this.getSectionRange(e,i):t!="all"&&(l=null)),l}if(t!=="markbegin"){var r=o.match(this.foldingStopMarker);if(r){var u=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],i,u):e.getCommentFoldRange(i,u,-1)}}},this.getSectionRange=function(e,t){var i=e.getLine(t),s=i.search(/\S/),o=t,u=i.length;t=t+1;for(var l=t,r=e.getLength();++t<r;){i=e.getLine(t);var h=i.search(/\S/);if(h!==-1){if(s>h)break;var c=this.getFoldWidgetRange(e,"all",t);if(c){if(c.start.row<=o)break;if(c.isMultiLine())t=c.end.row;else if(s==h)break}l=t}}return new f(o,u,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,t,i){for(var s=t.search(/\s*$/),o=e.getLength(),u=i,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,r=1;++i<o;){t=e.getLine(i);var h=l.exec(t);if(h&&(h[1]?r--:r++,!r))break}var c=i;if(c>u)return new f(u,s,c,t.length)}}).call(k.prototype)}),ace.define("ace/mode/prisma",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/prisma_highlight_rules","ace/mode/folding/cstyle"],function(n,a,m){var d=n("../lib/oop"),f=n("./text").Mode,p=n("./prisma_highlight_rules").PrismaHighlightRules,k=n("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=p,this.foldingRules=new k};d.inherits(e,f),(function(){this.lineCommentStart="//",this.$id="ace/mode/prisma"}).call(e.prototype),a.Mode=e}),function(){ace.require(["ace/mode/prisma"],function(n){g&&(g.exports=n)})}()})(_);var b=_.exports;const R=v(b),M=y({__proto__:null,default:R},[b]);export{M as m};
