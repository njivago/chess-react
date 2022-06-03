import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/img/black-king.png";
import whiteLogo from "../../assets/img/white-king.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    return true;
  }
  // logic is waiting :)
}
