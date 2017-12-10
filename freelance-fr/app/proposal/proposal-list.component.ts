import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(14, "Kim Muller", "http://kadens-sick-website.com", "ruby on rails", 120, 90, 8, "client@email.com")
  proposalTwo: Proposal = new Proposal(21, "Google", "http://google.com", "java", 300, 200, 24, "client@email.com")
  proposalThree: Proposal = new Proposal(6, "Wells Fargo", "http://wellsfargo.com", "angular", 212, 80, 13, "client@email.com")d

  proposals: Proposal[] = [
    this.proposalOne, 
    this.proposalTwo, 
    this.proposalThree
    ]
}