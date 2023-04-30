# Market-n-Marketer

## Sprint 2
<pre>
During Sprint 1 a decent amount of work was done:
 - EquipmentCard
 - ListingTable
 - SignInCards
 - SubmissionForm
 - Firebase setup for Users + Listings

However, in order to have a fully functional site, a bit more needs done:
 - EquipmentCard: Item images and styling need to be fixed and updated for new equipment
 - ListingTable: Needs fully functional filter
 - SignInContainers: Need proper styling
 - 
</pre>
 
## Sprint 1 

**Initial Requirements:**
<pre>
Market-n-Marketer ("MnM"), serves as a 3rd-party marketplace tool in order for players of the 
Extraction-Looter title 'Dark and Darker' to provide players a superior trading tool to that
which is offered in the game client. For MnM  to function in by the April playtest, the app
needs a few essential features, described below.
</pre>

**Service:**
<pre>
  Mapping                 HTTP Method    INFO <br />
  /listing                POST           Creates new listing <br />
  /listing/{listingId}    GET            Retrieves single listing for page <br />
  /listing/{listingId}    PUT            Updates status of a listing, utilized in remove listing <br />
  /listings               GET ALL        Retrieves full list of item listings <br />
</pre>
<br />

**UI:**
<pre>
  LandingPage: 
    SubmitListingButton
    ListingTableContainer
      ListingTableFilter <sub>(* - low prio)</sub>
      ListingTable
        ListingCard
        
  ListingSubmissionPage:
    ListingSubmissionContainer
      ListingSubmissionForm
      ListingCard
</pre>
<br/>
