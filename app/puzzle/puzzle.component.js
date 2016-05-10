System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    // when the component is initiated, assign random numbers to the four number variables
                    this.num1 = Math.round(Math.random());
                    this.num2 = Math.round(Math.random());
                    this.num3 = Math.round(Math.random());
                    this.num4 = Math.round(Math.random());
                    // log the numbers so we don't have to try all the combinations ;)
                    console.log(this.num1);
                    console.log(this.num2);
                    console.log(this.num3);
                    console.log(this.num4);
                };
                PuzzleComponent.prototype.isSolved = function (el1, el2, el3, el4) {
                    // the puzzle is solved only if all the element input values match their respective numbers (random numbers) here
                    return (el1.value == this.num1 && el2.value == this.num2 && el3.value == this.num3 && el4.value == this.num4);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'ng2-puzzle',
                        template: "\n        \n        <section class=\"name-section\">\n            Please enter your name : \n            <input type=\"text\" #name (keyup)=\"0\">               <!-- user will enter his name here. the variable used is \"name\" -->\n        </section>\n        <br>\n        <section class=\"puzzle\" [ngClass]=\"{ danger: !isSolved(el1,el2,el3,el4), success:isSolved(el1,el2,el3,el4) }\" [ngStyle]=\" { display : name.value!='' ? 'block' : 'none' }\">\n        \n            <h4>Welcome {{name.value}} !</h4>\n            <h4>THE PUZZLE IS : {{isSolved(el1,el2,el3,el4) ? 'Solved' : 'Not Solved'}}</h4>\n            \n            Val1: <input type=\"text\" value=\"-1\" #el1 (keyup)=\"0\">\n            <br>\n            Val2: <input type=\"text\" value=\"-1\" #el2 (keyup)=\"0\">\n            <br>\n            Val3: <input type=\"text\" value=\"-1\" #el3 (keyup)=\"0\">\n            <br>\n            Val4: <input type=\"text\" value=\"-1\" #el4 (keyup)=\"0\">\n            <br>\n            \n        </section>\n        \n        <h2 *ngIf=\"isSolved(el1,el2,el3,el4)\">Congrats {{name.value}}! You have solved the puzzle :) </h2>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBOEJBO2dCQUNJO2dCQUFnQixDQUFDO2dCQU9qQixrQ0FBUSxHQUFSO29CQUVJLHNGQUFzRjtvQkFDdEYsSUFBSSxDQUFDLElBQUksR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDckMsSUFBSSxDQUFDLElBQUksR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUVyQyxrRUFBa0U7b0JBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMzQixDQUFDO2dCQUVELGtDQUFRLEdBQVIsVUFBUyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHO29CQUNwQixpSEFBaUg7b0JBQ2pILE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsS0FBSyxJQUFFLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssSUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFLLElBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxRyxDQUFDO2dCQXRETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsc25DQXdCVDtxQkFDSixDQUFDOzttQ0FBQTtnQkE2QkYsc0JBQUM7WUFBRCxDQTVCQSxBQTRCQyxJQUFBO1lBNUJELDZDQTRCQyxDQUFBIiwiZmlsZSI6InB1enpsZS9wdXp6bGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduZzItcHV6emxlJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJuYW1lLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgUGxlYXNlIGVudGVyIHlvdXIgbmFtZSA6IFxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbmFtZSAoa2V5dXApPVwiMFwiPiAgICAgICAgICAgICAgIDwhLS0gdXNlciB3aWxsIGVudGVyIGhpcyBuYW1lIGhlcmUuIHRoZSB2YXJpYWJsZSB1c2VkIGlzIFwibmFtZVwiIC0tPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8YnI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwdXp6bGVcIiBbbmdDbGFzc109XCJ7IGRhbmdlcjogIWlzU29sdmVkKGVsMSxlbDIsZWwzLGVsNCksIHN1Y2Nlc3M6aXNTb2x2ZWQoZWwxLGVsMixlbDMsZWw0KSB9XCIgW25nU3R5bGVdPVwiIHsgZGlzcGxheSA6IG5hbWUudmFsdWUhPScnID8gJ2Jsb2NrJyA6ICdub25lJyB9XCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxoND5XZWxjb21lIHt7bmFtZS52YWx1ZX19ICE8L2g0PlxyXG4gICAgICAgICAgICA8aDQ+VEhFIFBVWlpMRSBJUyA6IHt7aXNTb2x2ZWQoZWwxLGVsMixlbDMsZWw0KSA/ICdTb2x2ZWQnIDogJ05vdCBTb2x2ZWQnfX08L2g0PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgVmFsMTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCItMVwiICNlbDEgKGtleXVwKT1cIjBcIj5cclxuICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICBWYWwyOiA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIi0xXCIgI2VsMiAoa2V5dXApPVwiMFwiPlxyXG4gICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgIFZhbDM6IDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiLTFcIiAjZWwzIChrZXl1cCk9XCIwXCI+XHJcbiAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgVmFsNDogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCItMVwiICNlbDQgKGtleXVwKT1cIjBcIj5cclxuICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGgyICpuZ0lmPVwiaXNTb2x2ZWQoZWwxLGVsMixlbDMsZWw0KVwiPkNvbmdyYXRzIHt7bmFtZS52YWx1ZX19ISBZb3UgaGF2ZSBzb2x2ZWQgdGhlIHB1enpsZSA6KSA8L2gyPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHV6emxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICBcclxuICAgIC8vZGVmaW5pbmcgZm91ciBudW1iZXIgdmFyaWFibGVzIHRoYXQgd2lsbCBjb3VudGFpbiBvdXIgcHV6emxlIGlucHV0IHZhbHVlc1xyXG4gICAgbnVtMTogbnVtYmVyO1xyXG4gICAgbnVtMjogbnVtYmVyO1xyXG4gICAgbnVtMzogbnVtYmVyO1xyXG4gICAgbnVtNDogbnVtYmVyO1xyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gd2hlbiB0aGUgY29tcG9uZW50IGlzIGluaXRpYXRlZCwgYXNzaWduIHJhbmRvbSBudW1iZXJzIHRvIHRoZSBmb3VyIG51bWJlciB2YXJpYWJsZXNcclxuICAgICAgICB0aGlzLm51bTE9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgdGhpcy5udW0yPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHRoaXMubnVtMz0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICB0aGlzLm51bTQ9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGxvZyB0aGUgbnVtYmVycyBzbyB3ZSBkb24ndCBoYXZlIHRvIHRyeSBhbGwgdGhlIGNvbWJpbmF0aW9ucyA7KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubnVtMSk7ICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm51bTIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubnVtMyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5udW00KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaXNTb2x2ZWQoZWwxLGVsMixlbDMsZWw0KXtcclxuICAgICAgICAvLyB0aGUgcHV6emxlIGlzIHNvbHZlZCBvbmx5IGlmIGFsbCB0aGUgZWxlbWVudCBpbnB1dCB2YWx1ZXMgbWF0Y2ggdGhlaXIgcmVzcGVjdGl2ZSBudW1iZXJzIChyYW5kb20gbnVtYmVycykgaGVyZVxyXG4gICAgICAgIHJldHVybiAoZWwxLnZhbHVlPT10aGlzLm51bTEgJiYgZWwyLnZhbHVlPT10aGlzLm51bTIgJiYgZWwzLnZhbHVlPT10aGlzLm51bTMgJiYgZWw0LnZhbHVlPT10aGlzLm51bTQpO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
