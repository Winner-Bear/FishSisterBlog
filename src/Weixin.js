import React from "react";
import "./App.css";
import "./main.css";
import mayWeixinUrl from "./static/profile/qrcode.jpg";


//水平居中未生效 去他妈的不管了 by linkinxiong
const QrCodeStyle = {verticalAlign:'middle'};

//仅展示一个微信好友二维码图片
const Weixin = () => {
	return (
		<div style={{textAlign:'center',verticalAlign:'middle',height:"100%"}}>
			<img width="400px" style={QrCodeStyle} src={mayWeixinUrl} alt="微信二维码" />
		</div>
	);
};

export default Weixin;
