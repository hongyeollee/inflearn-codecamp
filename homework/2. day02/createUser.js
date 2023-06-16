export const user={
    name : "코드캠프",
    email : "support@codebootcamp.co.kr",
    phone : "000-0000-0000",
    likeDomain : "codebootcamp.co.kr",
    customRegistNumber : function customRegistNumber(customRegistNumber){
        const hide = '******';
        return customRegistNumber.substring(0,8)+hide
    }
}