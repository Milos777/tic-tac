// var stage = new createjs.Stage("tic-tac");
// createjs.Ticker.on("tick", stage);
//
// var speed= 500;
//
//
// // Line 1
// var point1x= 500;
// var point1y= 100;
// var target1y= 700;
//
// // Line 2
// var point2x= 700;
// var point2y= 700;
// var target2y= 100;
//
// // Line 3
// var point3x= 300;
// var point3y= 300;
// var target3x= 900;
//
// // Line 4
// var point4x= 300;
// var point4y= 500;
// var target4x= 900;
// // Tic-tac grid
//
// var line = stage.addChild(new createjs.Shape());
// line.graphics.beginStroke("black").setStrokeStyle(5).moveTo(point1x, point1y);
// var cmd = line.graphics.lineTo(point1x, point1y).command;
//
// createjs.Tween.get(cmd, {loop:false}).to({y:target1y}, speed);
//
// var line2 = stage.addChild(new createjs.Shape());
// line.graphics.beginStroke("black").setStrokeStyle(5).moveTo(point2x, point2y);
// var cmd = line.graphics.lineTo(point2x, point2y).command;
//
// createjs.Tween.get(cmd, {loop:false}).to({y:target2y}, speed);
//
// var line3 = stage.addChild(new createjs.Shape());
// line.graphics.beginStroke("black").setStrokeStyle(5).moveTo(point3x, point3y);
// var cmd = line.graphics.lineTo(point3x, point3y).command;
//
// createjs.Tween.get(cmd, {loop:false}).to({x:target3x}, speed);
//
// var line4 = stage.addChild(new createjs.Shape());
// line.graphics.beginStroke("black").setStrokeStyle(5).moveTo(point4x, point4y);
// var cmd = line.graphics.lineTo(point4x, point4y).command;
//
// createjs.Tween.get(cmd, {loop:false}).to({x:target4x}, speed);
