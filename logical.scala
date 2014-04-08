@JSExport
object ScalaJSExample{
@JSExport
def main(args: Array[String]): Unit = {
  
  
  sealed abstract class Expr
  case class And(l: Expr, r: Expr) extends Expr
  case class Or(l: Expr, r: Expr) extends Expr
  case class Xor(l: Expr, r: Expr) extends Expr
  case class Negate(e: Expr) extends Expr
  case class Value(v: Boolean) extends Expr
  
  
  def eval(e: Expr): Boolean = {
    e match {
      case And(l, r) => eval(l) && eval(r)
      case Or(l, r) => eval(l) || eval(r)
      case Xor(l, r) => {
        val valL = eval(l)
        val valR = eval(r)
        valL && !valR || !valL && valR 
      }
      case Negate(e) => !eval(e)
      case Value(v) => v
    }
  }
  
  val expression = And(Or(Value(true), Value(false)), Xor(Value(false), Value(false)))
  
  println(eval(expression))

  }
}