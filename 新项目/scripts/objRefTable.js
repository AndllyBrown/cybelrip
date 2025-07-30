const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Behaviors.solid,
		C3.Behaviors.shadowcaster,
		C3.Plugins.Spritefont2,
		C3.Plugins.Text,
		C3.Behaviors.Fade,
		C3.Plugins.TextBox,
		C3.Behaviors.DragnDrop,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Cnds.IsCollisionEnabled,
		C3.Plugins.Spritefont2.Acts.TypewriterText,
		C3.Plugins.Sprite.Cnds.OnCollision
	];
};
self.C3_JsPropNameTable = [
	{平铺图: 0},
	{平铺图2: 0},
	{八方向: 0},
	{镜头跟随: 0},
	{精灵: 0},
	{键盘: 0},
	{实体: 0},
	{平铺图3: 0},
	{投影对象: 0},
	{精灵2: 0},
	{位图字体: 0},
	{淡入淡出: 0},
	{文本: 0},
	{平铺图4: 0},
	{输入框: 0},
	{拖放: 0},
	{精灵3: 0}
];

self.InstanceType = {
	平铺图: class extends self.ITiledBackgroundInstance {},
	平铺图2: class extends self.ITiledBackgroundInstance {},
	精灵: class extends self.ISpriteInstance {},
	键盘: class extends self.IInstance {},
	平铺图3: class extends self.ITiledBackgroundInstance {},
	精灵2: class extends self.ISpriteInstance {},
	位图字体: class extends self.ISpriteFontInstance {},
	文本: class extends self.ITextInstance {},
	平铺图4: class extends self.ITiledBackgroundInstance {},
	输入框: class extends self.ITextInputInstance {},
	精灵3: class extends self.ISpriteInstance {}
}