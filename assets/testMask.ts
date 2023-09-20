import { _decorator, Component, EventMouse, Input, input, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('testMask')
export class testMask extends Component {

  @property({ type: Node })
  maskNode: Node = null;
  @property({ type: Node })
  maskTarget: Node = null;
  @property({ type: Node })
  mask_sub: Node = null;

  target_worldPos: Vec3 = null;
  maskSub_worldPos: Vec3 = null;

  start() {
    this.target_worldPos = this.maskTarget.worldPosition;
    this.maskSub_worldPos = this.mask_sub.worldPosition;
    input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
    input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
    input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
  }

  onMouseDown=(event:EventMouse)=>{
    let mousePos = event.getUILocation();
    this.maskNode.setWorldPosition(new Vec3(mousePos.x, mousePos.y, 0));
    this.mask_sub.position = new Vec3(this.maskNode.position.x*-1, this.maskNode.position.y*-1);
  }
  onMouseMove=(event:EventMouse)=>{
    let mousePos = event.getUILocation();
    this.maskNode.setWorldPosition(new Vec3(mousePos.x, mousePos.y, 0));
    this.mask_sub.position = new Vec3(this.maskNode.position.x*-1, this.maskNode.position.y*-1);
  }

  onMouseUp=(event:EventMouse)=>{

  }

  update(deltaTime: number) {

  }
}


