#include <iostream>
#include "profile.h"

Profile::Profile(string usrn, string dspn) {
  username = usrn;
  displayname = dspn;
}

Profile::Profile(){
  username = "";
  displayname = "";
}

string Profile::getUsername() {
  return username;
}

string Profile::getFullName() {
  return displayname + " (@" + username + ")";
}

string Profile::getUserWithAt() {
  return "\"@"+username+"\"";
}

void Profile::setDisplayName(string dspn) {
  displayname = dspn;
}
