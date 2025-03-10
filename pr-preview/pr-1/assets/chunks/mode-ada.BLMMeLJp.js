import{g as b}from"./commonjsHelpers.BosuxZz1.js";function k(s,u){for(var e=0;e<u.length;e++){const n=u[e];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in s)){const o=Object.getOwnPropertyDescriptor(n,a);o&&Object.defineProperty(s,a,o.get?o:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var v={exports:{}};(function(s,u){ace.define("ace/mode/ada_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,n,a){var o=e("../lib/oop"),h=e("./text_highlight_rules").TextHighlightRules,c=function(){var p="abort|else|new|return|abs|elsif|not|reverse|abstract|end|null|accept|entry|select|access|exception|of|separate|aliased|exit|or|some|all|others|subtype|and|for|out|synchronized|array|function|overriding|at|tagged|generic|package|task|begin|goto|pragma|terminate|body|private|then|if|procedure|type|case|in|protected|constant|interface|until||is|raise|use|declare|range|delay|limited|record|when|delta|loop|rem|while|digits|renames|with|do|mod|requeue|xor",g="true|false|null",d="count|min|max|avg|sum|rank|now|coalesce|main",t=this.createKeywordMapper({"support.function":d,keyword:p,"constant.language":g},"identifier",!0);this.$rules={start:[{token:"comment",regex:"--.*$"},{token:"string",regex:'".*?"'},{token:"string",regex:"'.'"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:t,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="},{token:"paren.lparen",regex:"[\\(]"},{token:"paren.rparen",regex:"[\\)]"},{token:"text",regex:"\\s+"}]}};o.inherits(c,h),n.AdaHighlightRules=c}),ace.define("ace/mode/ada",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/ada_highlight_rules","ace/range"],function(e,n,a){var o=e("../lib/oop"),h=e("./text").Mode,c=e("./ada_highlight_rules").AdaHighlightRules,p=e("../range").Range,g=function(){this.HighlightRules=c,this.$behaviour=this.$defaultBehaviour};o.inherits(g,h),(function(){this.lineCommentStart="--",this.getNextLineIndent=function(d,t,r){var i=this.$getIndent(t),f=this.getTokenizer().getLineTokens(t,d),l=f.tokens;if(l.length&&l[l.length-1].type=="comment")return i;if(d=="start"){var m=t.match(/^.*(begin|loop|then|is|do)\s*$/);m&&(i+=r)}return i},this.checkOutdent=function(d,t,r){var i=t+r;return!!i.match(/^\s*(begin|end)$/)},this.autoOutdent=function(d,t,r){var i=t.getLine(r),f=t.getLine(r-1),l=this.$getIndent(f).length,m=this.$getIndent(i).length;m<=l||t.outdentRows(new p(r,0,r+2,0))},this.$id="ace/mode/ada"}).call(g.prototype),n.Mode=g}),function(){ace.require(["ace/mode/ada"],function(e){s&&(s.exports=e)})}()})(v);var x=v.exports;const y=b(x),$=k({__proto__:null,default:y},[x]);export{$ as m};
