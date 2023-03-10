'use strict';
var utils=require('./common');var STR_APPLY_OK=true;var STR_APPLY_UIA_OK=true;try{String.fromCharCode.apply(null,[0]);}catch(__){STR_APPLY_OK=false;}
try{String.fromCharCode.apply(null,new Uint8Array(1));}catch(__){STR_APPLY_UIA_OK=false;}
var _utf8len=new utils.Buf8(256);for(var q=0;q<256;q++){_utf8len[q]=(q>=252?6:q>=248?5:q>=240?4:q>=224?3:q>=192?2:1);}
_utf8len[254]=_utf8len[254]=1;exports.string2buf=function(str){var buf,c,c2,m_pos,i,str_len=str.length,buf_len=0;for(m_pos=0;m_pos<str_len;m_pos++){c=str.charCodeAt(m_pos);if((c&0xfc00)===0xd800&&(m_pos+1<str_len)){c2=str.charCodeAt(m_pos+1);if((c2&0xfc00)===0xdc00){c=0x10000+((c-0xd800)<<10)+(c2-0xdc00);m_pos++;}}
buf_len+=c<0x80?1:c<0x800?2:c<0x10000?3:4;}
buf=new utils.Buf8(buf_len);for(i=0,m_pos=0;i<buf_len;m_pos++){c=str.charCodeAt(m_pos);if((c&0xfc00)===0xd800&&(m_pos+1<str_len)){c2=str.charCodeAt(m_pos+1);if((c2&0xfc00)===0xdc00){c=0x10000+((c-0xd800)<<10)+(c2-0xdc00);m_pos++;}}
if(c<0x80){buf[i++]=c;}else if(c<0x800){buf[i++]=0xC0|(c>>>6);buf[i++]=0x80|(c&0x3f);}else if(c<0x10000){buf[i++]=0xE0|(c>>>12);buf[i++]=0x80|(c>>>6&0x3f);buf[i++]=0x80|(c&0x3f);}else{buf[i++]=0xf0|(c>>>18);buf[i++]=0x80|(c>>>12&0x3f);buf[i++]=0x80|(c>>>6&0x3f);buf[i++]=0x80|(c&0x3f);}}
return buf;};function buf2binstring(buf,len){if(len<65537){if((buf.subarray&&STR_APPLY_UIA_OK)||(!buf.subarray&&STR_APPLY_OK)){return String.fromCharCode.apply(null,utils.shrinkBuf(buf,len));}}
var result='';for(var i=0;i<len;i++){result+=String.fromCharCode(buf[i]);}
return result;}
exports.buf2binstring=function(buf){return buf2binstring(buf,buf.length);};exports.binstring2buf=function(str){var buf=new utils.Buf8(str.length);for(var i=0,len=buf.length;i<len;i++){buf[i]=str.charCodeAt(i);}
return buf;};exports.buf2string=function(buf,max){var i,out,c,c_len;var len=max||buf.length;var utf16buf=new Array(len*2);for(out=0,i=0;i<len;){c=buf[i++];if(c<0x80){utf16buf[out++]=c;continue;}
c_len=_utf8len[c];if(c_len>4){utf16buf[out++]=0xfffd;i+=c_len-1;continue;}
c&=c_len===2?0x1f:c_len===3?0x0f:0x07;while(c_len>1&&i<len){c=(c<<6)|(buf[i++]&0x3f);c_len--;}
if(c_len>1){utf16buf[out++]=0xfffd;continue;}
if(c<0x10000){utf16buf[out++]=c;}else{c-=0x10000;utf16buf[out++]=0xd800|((c>>10)&0x3ff);utf16buf[out++]=0xdc00|(c&0x3ff);}}
return buf2binstring(utf16buf,out);};exports.utf8border=function(buf,max){var pos;max=max||buf.length;if(max>buf.length){max=buf.length;}
pos=max-1;while(pos>=0&&(buf[pos]&0xC0)===0x80){pos--;}
if(pos<0){return max;}
if(pos===0){return max;}
return(pos+_utf8len[buf[pos]]>max)?pos:max;};
