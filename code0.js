gdjs.beginCode = {};
gdjs.beginCode.GDbalduinoObjects1= [];
gdjs.beginCode.GDbalduinoObjects2= [];
gdjs.beginCode.GDfloorObjects1= [];
gdjs.beginCode.GDfloorObjects2= [];
gdjs.beginCode.GDenemyObjects1= [];
gdjs.beginCode.GDenemyObjects2= [];
gdjs.beginCode.GDLeftArrowRoundButtonObjects1= [];
gdjs.beginCode.GDLeftArrowRoundButtonObjects2= [];
gdjs.beginCode.GDRightArrowRoundButtonObjects1= [];
gdjs.beginCode.GDRightArrowRoundButtonObjects2= [];
gdjs.beginCode.GDNewObjectObjects1= [];
gdjs.beginCode.GDNewObjectObjects2= [];
gdjs.beginCode.GDNewObject2Objects1= [];
gdjs.beginCode.GDNewObject2Objects2= [];
gdjs.beginCode.GDNewObject3Objects1= [];
gdjs.beginCode.GDNewObject3Objects2= [];
gdjs.beginCode.GDNewObject4Objects1= [];
gdjs.beginCode.GDNewObject4Objects2= [];
gdjs.beginCode.GDNewObject5Objects1= [];
gdjs.beginCode.GDNewObject5Objects2= [];
gdjs.beginCode.GDNewObject7Objects1= [];
gdjs.beginCode.GDNewObject7Objects2= [];
gdjs.beginCode.GDNewObject8Objects1= [];
gdjs.beginCode.GDNewObject8Objects2= [];
gdjs.beginCode.GDNewObject6Objects1= [];
gdjs.beginCode.GDNewObject6Objects2= [];
gdjs.beginCode.GDNewObject10Objects1= [];
gdjs.beginCode.GDNewObject10Objects2= [];
gdjs.beginCode.GDNewObject9Objects1= [];
gdjs.beginCode.GDNewObject9Objects2= [];

gdjs.beginCode.conditionTrue_0 = {val:false};
gdjs.beginCode.condition0IsTrue_0 = {val:false};
gdjs.beginCode.condition1IsTrue_0 = {val:false};


gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDbalduinoObjects1Objects = Hashtable.newFrom({"balduino": gdjs.beginCode.GDbalduinoObjects1});gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDNewObjectObjects1ObjectsGDgdjs_46beginCode_46GDNewObject2Objects1ObjectsGDgdjs_46beginCode_46GDNewObject3Objects1ObjectsGDgdjs_46beginCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject": gdjs.beginCode.GDNewObjectObjects1, "NewObject2": gdjs.beginCode.GDNewObject2Objects1, "NewObject3": gdjs.beginCode.GDNewObject3Objects1, "NewObject4": gdjs.beginCode.GDNewObject4Objects1});gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDNewObjectObjects1ObjectsGDgdjs_46beginCode_46GDNewObject2Objects1ObjectsGDgdjs_46beginCode_46GDNewObject3Objects1ObjectsGDgdjs_46beginCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject": gdjs.beginCode.GDNewObjectObjects1, "NewObject2": gdjs.beginCode.GDNewObject2Objects1, "NewObject3": gdjs.beginCode.GDNewObject3Objects1, "NewObject4": gdjs.beginCode.GDNewObject4Objects1});gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDbalduinoObjects1Objects = Hashtable.newFrom({"balduino": gdjs.beginCode.GDbalduinoObjects1});gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.beginCode.GDenemyObjects1});gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.beginCode.GDenemyObjects1});gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.beginCode.GDenemyObjects1});gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDRightArrowRoundButtonObjects1Objects = Hashtable.newFrom({"RightArrowRoundButton": gdjs.beginCode.GDRightArrowRoundButtonObjects1});gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.beginCode.GDenemyObjects1});gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDLeftArrowRoundButtonObjects1Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.beginCode.GDLeftArrowRoundButtonObjects1});gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDbalduinoObjects1Objects = Hashtable.newFrom({"balduino": gdjs.beginCode.GDbalduinoObjects1});gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.beginCode.GDNewObjectObjects1});gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDbalduinoObjects1Objects = Hashtable.newFrom({"balduino": gdjs.beginCode.GDbalduinoObjects1});gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.beginCode.GDNewObject2Objects1});gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDbalduinoObjects1Objects = Hashtable.newFrom({"balduino": gdjs.beginCode.GDbalduinoObjects1});gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.beginCode.GDNewObject3Objects1});gdjs.beginCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("balduino"), gdjs.beginCode.GDbalduinoObjects1);
{gdjs.evtTools.camera.centerCameraWithinLimits(runtimeScene, (gdjs.beginCode.GDbalduinoObjects1.length !== 0 ? gdjs.beginCode.GDbalduinoObjects1[0] : null), 0, 0, 1080, 875, true, "game", 0);
}}

}


{



}


{


gdjs.beginCode.condition0IsTrue_0.val = false;
{
gdjs.beginCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.beginCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("balduino"), gdjs.beginCode.GDbalduinoObjects1);
{for(var i = 0, len = gdjs.beginCode.GDbalduinoObjects1.length ;i < len;++i) {
    gdjs.beginCode.GDbalduinoObjects1[i].setAnimationName("Left");
}
}{for(var i = 0, len = gdjs.beginCode.GDbalduinoObjects1.length ;i < len;++i) {
    gdjs.beginCode.GDbalduinoObjects1[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{


gdjs.beginCode.condition0IsTrue_0.val = false;
{
gdjs.beginCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
}if (gdjs.beginCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("balduino"), gdjs.beginCode.GDbalduinoObjects1);
{for(var i = 0, len = gdjs.beginCode.GDbalduinoObjects1.length ;i < len;++i) {
    gdjs.beginCode.GDbalduinoObjects1[i].setAnimationName("idle-left");
}
}}

}


{


gdjs.beginCode.condition0IsTrue_0.val = false;
{
gdjs.beginCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.beginCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("balduino"), gdjs.beginCode.GDbalduinoObjects1);
{for(var i = 0, len = gdjs.beginCode.GDbalduinoObjects1.length ;i < len;++i) {
    gdjs.beginCode.GDbalduinoObjects1[i].setAnimationName("Down");
}
}{for(var i = 0, len = gdjs.beginCode.GDbalduinoObjects1.length ;i < len;++i) {
    gdjs.beginCode.GDbalduinoObjects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{


gdjs.beginCode.condition0IsTrue_0.val = false;
{
gdjs.beginCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
}if (gdjs.beginCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("balduino"), gdjs.beginCode.GDbalduinoObjects1);
{for(var i = 0, len = gdjs.beginCode.GDbalduinoObjects1.length ;i < len;++i) {
    gdjs.beginCode.GDbalduinoObjects1[i].setAnimationName("idle-down");
}
}}

}


{


gdjs.beginCode.condition0IsTrue_0.val = false;
{
gdjs.beginCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.beginCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("balduino"), gdjs.beginCode.GDbalduinoObjects1);
{for(var i = 0, len = gdjs.beginCode.GDbalduinoObjects1.length ;i < len;++i) {
    gdjs.beginCode.GDbalduinoObjects1[i].setAnimationName("Up");
}
}{for(var i = 0, len = gdjs.beginCode.GDbalduinoObjects1.length ;i < len;++i) {
    gdjs.beginCode.GDbalduinoObjects1[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{


gdjs.beginCode.condition0IsTrue_0.val = false;
{
gdjs.beginCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
}if (gdjs.beginCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("balduino"), gdjs.beginCode.GDbalduinoObjects1);
{for(var i = 0, len = gdjs.beginCode.GDbalduinoObjects1.length ;i < len;++i) {
    gdjs.beginCode.GDbalduinoObjects1[i].setAnimationName("idle-up");
}
}}

}


{


gdjs.beginCode.condition0IsTrue_0.val = false;
{
gdjs.beginCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.beginCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("balduino"), gdjs.beginCode.GDbalduinoObjects1);
{for(var i = 0, len = gdjs.beginCode.GDbalduinoObjects1.length ;i < len;++i) {
    gdjs.beginCode.GDbalduinoObjects1[i].setAnimationName("Right");
}
}{for(var i = 0, len = gdjs.beginCode.GDbalduinoObjects1.length ;i < len;++i) {
    gdjs.beginCode.GDbalduinoObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.beginCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.beginCode.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.beginCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.beginCode.GDNewObject4Objects1);
gdjs.copyArray(runtimeScene.getObjects("balduino"), gdjs.beginCode.GDbalduinoObjects1);

gdjs.beginCode.condition0IsTrue_0.val = false;
{
gdjs.beginCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDbalduinoObjects1Objects, gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDNewObjectObjects1ObjectsGDgdjs_46beginCode_46GDNewObject2Objects1ObjectsGDgdjs_46beginCode_46GDNewObject3Objects1ObjectsGDgdjs_46beginCode_46GDNewObject4Objects1Objects, false, runtimeScene, false);
}if (gdjs.beginCode.condition0IsTrue_0.val) {
/* Reuse gdjs.beginCode.GDNewObjectObjects1 */
/* Reuse gdjs.beginCode.GDNewObject2Objects1 */
/* Reuse gdjs.beginCode.GDNewObject3Objects1 */
/* Reuse gdjs.beginCode.GDNewObject4Objects1 */
/* Reuse gdjs.beginCode.GDbalduinoObjects1 */
{for(var i = 0, len = gdjs.beginCode.GDbalduinoObjects1.length ;i < len;++i) {
    gdjs.beginCode.GDbalduinoObjects1[i].separateFromObjectsList(gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDNewObjectObjects1ObjectsGDgdjs_46beginCode_46GDNewObject2Objects1ObjectsGDgdjs_46beginCode_46GDNewObject3Objects1ObjectsGDgdjs_46beginCode_46GDNewObject4Objects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("balduino"), gdjs.beginCode.GDbalduinoObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.beginCode.GDenemyObjects1);

gdjs.beginCode.condition0IsTrue_0.val = false;
{
gdjs.beginCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDbalduinoObjects1Objects, gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDenemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.beginCode.condition0IsTrue_0.val) {
/* Reuse gdjs.beginCode.GDbalduinoObjects1 */
/* Reuse gdjs.beginCode.GDenemyObjects1 */
{for(var i = 0, len = gdjs.beginCode.GDbalduinoObjects1.length ;i < len;++i) {
    gdjs.beginCode.GDbalduinoObjects1[i].separateFromObjectsList(gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDenemyObjects1Objects, false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.beginCode.GDRightArrowRoundButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.beginCode.GDenemyObjects1);

gdjs.beginCode.condition0IsTrue_0.val = false;
{
gdjs.beginCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDenemyObjects1Objects, gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDRightArrowRoundButtonObjects1Objects, false, runtimeScene, false);
}if (gdjs.beginCode.condition0IsTrue_0.val) {
/* Reuse gdjs.beginCode.GDenemyObjects1 */
{for(var i = 0, len = gdjs.beginCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.beginCode.GDenemyObjects1[i].returnVariable(gdjs.beginCode.GDenemyObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.beginCode.GDLeftArrowRoundButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.beginCode.GDenemyObjects1);

gdjs.beginCode.condition0IsTrue_0.val = false;
{
gdjs.beginCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDenemyObjects1Objects, gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDLeftArrowRoundButtonObjects1Objects, false, runtimeScene, false);
}if (gdjs.beginCode.condition0IsTrue_0.val) {
/* Reuse gdjs.beginCode.GDenemyObjects1 */
{for(var i = 0, len = gdjs.beginCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.beginCode.GDenemyObjects1[i].returnVariable(gdjs.beginCode.GDenemyObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.beginCode.GDenemyObjects1);

gdjs.beginCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.beginCode.GDenemyObjects1.length;i<l;++i) {
    if ( gdjs.beginCode.GDenemyObjects1[i].getVariableNumber(gdjs.beginCode.GDenemyObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.beginCode.condition0IsTrue_0.val = true;
        gdjs.beginCode.GDenemyObjects1[k] = gdjs.beginCode.GDenemyObjects1[i];
        ++k;
    }
}
gdjs.beginCode.GDenemyObjects1.length = k;}if (gdjs.beginCode.condition0IsTrue_0.val) {
/* Reuse gdjs.beginCode.GDenemyObjects1 */
{for(var i = 0, len = gdjs.beginCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.beginCode.GDenemyObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}{for(var i = 0, len = gdjs.beginCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.beginCode.GDenemyObjects1[i].setAnimationName("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.beginCode.GDenemyObjects1);

gdjs.beginCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.beginCode.GDenemyObjects1.length;i<l;++i) {
    if ( gdjs.beginCode.GDenemyObjects1[i].getVariableNumber(gdjs.beginCode.GDenemyObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.beginCode.condition0IsTrue_0.val = true;
        gdjs.beginCode.GDenemyObjects1[k] = gdjs.beginCode.GDenemyObjects1[i];
        ++k;
    }
}
gdjs.beginCode.GDenemyObjects1.length = k;}if (gdjs.beginCode.condition0IsTrue_0.val) {
/* Reuse gdjs.beginCode.GDenemyObjects1 */
{for(var i = 0, len = gdjs.beginCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.beginCode.GDenemyObjects1[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.beginCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.beginCode.GDenemyObjects1[i].setAnimationName("Left");
}
}}

}


{


{
}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject10"), gdjs.beginCode.GDNewObject10Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.beginCode.GDNewObject5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.beginCode.GDNewObject6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.beginCode.GDNewObject7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject8"), gdjs.beginCode.GDNewObject8Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject9"), gdjs.beginCode.GDNewObject9Objects1);
{for(var i = 0, len = gdjs.beginCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.beginCode.GDNewObject5Objects1[i].hide();
}
for(var i = 0, len = gdjs.beginCode.GDNewObject6Objects1.length ;i < len;++i) {
    gdjs.beginCode.GDNewObject6Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.beginCode.GDNewObject8Objects1.length ;i < len;++i) {
    gdjs.beginCode.GDNewObject8Objects1[i].hide();
}
for(var i = 0, len = gdjs.beginCode.GDNewObject7Objects1.length ;i < len;++i) {
    gdjs.beginCode.GDNewObject7Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.beginCode.GDNewObject9Objects1.length ;i < len;++i) {
    gdjs.beginCode.GDNewObject9Objects1[i].hide();
}
for(var i = 0, len = gdjs.beginCode.GDNewObject10Objects1.length ;i < len;++i) {
    gdjs.beginCode.GDNewObject10Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.beginCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("balduino"), gdjs.beginCode.GDbalduinoObjects1);

gdjs.beginCode.condition0IsTrue_0.val = false;
{
gdjs.beginCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDbalduinoObjects1Objects, gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDNewObjectObjects1Objects, false, runtimeScene, false);
}if (gdjs.beginCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.beginCode.GDNewObject5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.beginCode.GDNewObject6Objects1);
{for(var i = 0, len = gdjs.beginCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.beginCode.GDNewObject5Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.beginCode.GDNewObject6Objects1.length ;i < len;++i) {
    gdjs.beginCode.GDNewObject6Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.beginCode.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("balduino"), gdjs.beginCode.GDbalduinoObjects1);

gdjs.beginCode.condition0IsTrue_0.val = false;
{
gdjs.beginCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDbalduinoObjects1Objects, gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDNewObject2Objects1Objects, false, runtimeScene, false);
}if (gdjs.beginCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.beginCode.GDNewObject7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject8"), gdjs.beginCode.GDNewObject8Objects1);
{for(var i = 0, len = gdjs.beginCode.GDNewObject8Objects1.length ;i < len;++i) {
    gdjs.beginCode.GDNewObject8Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.beginCode.GDNewObject7Objects1.length ;i < len;++i) {
    gdjs.beginCode.GDNewObject7Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.beginCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("balduino"), gdjs.beginCode.GDbalduinoObjects1);

gdjs.beginCode.condition0IsTrue_0.val = false;
{
gdjs.beginCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDbalduinoObjects1Objects, gdjs.beginCode.mapOfGDgdjs_46beginCode_46GDNewObject3Objects1Objects, false, runtimeScene, false);
}if (gdjs.beginCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject10"), gdjs.beginCode.GDNewObject10Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject9"), gdjs.beginCode.GDNewObject9Objects1);
{for(var i = 0, len = gdjs.beginCode.GDNewObject9Objects1.length ;i < len;++i) {
    gdjs.beginCode.GDNewObject9Objects1[i].hide(false);
}
for(var i = 0, len = gdjs.beginCode.GDNewObject10Objects1.length ;i < len;++i) {
    gdjs.beginCode.GDNewObject10Objects1[i].hide(false);
}
}}

}


};

gdjs.beginCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.beginCode.GDbalduinoObjects1.length = 0;
gdjs.beginCode.GDbalduinoObjects2.length = 0;
gdjs.beginCode.GDfloorObjects1.length = 0;
gdjs.beginCode.GDfloorObjects2.length = 0;
gdjs.beginCode.GDenemyObjects1.length = 0;
gdjs.beginCode.GDenemyObjects2.length = 0;
gdjs.beginCode.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.beginCode.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.beginCode.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.beginCode.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.beginCode.GDNewObjectObjects1.length = 0;
gdjs.beginCode.GDNewObjectObjects2.length = 0;
gdjs.beginCode.GDNewObject2Objects1.length = 0;
gdjs.beginCode.GDNewObject2Objects2.length = 0;
gdjs.beginCode.GDNewObject3Objects1.length = 0;
gdjs.beginCode.GDNewObject3Objects2.length = 0;
gdjs.beginCode.GDNewObject4Objects1.length = 0;
gdjs.beginCode.GDNewObject4Objects2.length = 0;
gdjs.beginCode.GDNewObject5Objects1.length = 0;
gdjs.beginCode.GDNewObject5Objects2.length = 0;
gdjs.beginCode.GDNewObject7Objects1.length = 0;
gdjs.beginCode.GDNewObject7Objects2.length = 0;
gdjs.beginCode.GDNewObject8Objects1.length = 0;
gdjs.beginCode.GDNewObject8Objects2.length = 0;
gdjs.beginCode.GDNewObject6Objects1.length = 0;
gdjs.beginCode.GDNewObject6Objects2.length = 0;
gdjs.beginCode.GDNewObject10Objects1.length = 0;
gdjs.beginCode.GDNewObject10Objects2.length = 0;
gdjs.beginCode.GDNewObject9Objects1.length = 0;
gdjs.beginCode.GDNewObject9Objects2.length = 0;

gdjs.beginCode.eventsList0(runtimeScene);
return;

}

gdjs['beginCode'] = gdjs.beginCode;
