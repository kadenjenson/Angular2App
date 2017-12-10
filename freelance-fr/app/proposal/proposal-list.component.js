"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var proposal_1 = require("./proposal");
var ProposalListComponent = /** @class */ (function () {
    function ProposalListComponent() {
        this.proposalOne = new proposal_1.Proposal(14, "Kim Muller", "http://kadens-sick-website.com", "ruby on rails", 120, 90, 8, "client@email.com");
        this.proposalTwo = new proposal_1.Proposal(21, "Google", "http://google.com", "java", 300, 200, 24, "client@email.com");
        this.proposalThree = new proposal_1.Proposal(6, "Wells Fargo", "http://wellsfargo.com", "angular", 212, 80, 13, "client@email.com");
        this.proposals = [
            this.proposalOne,
            this.proposalTwo,
            this.proposalThree
        ];
    }
    ProposalListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'proposal-list',
            templateUrl: 'proposal-list.component.html'
        })
    ], ProposalListComponent);
    return ProposalListComponent;
}());
exports.ProposalListComponent = ProposalListComponent;
//# sourceMappingURL=proposal-list.component.js.map