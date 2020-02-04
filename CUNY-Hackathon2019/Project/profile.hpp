#pragma once
#include <string>
using std::string;

class Profile {
private:
    string username;
    string displayname;
public:
    // Profile constructor for a user (initializing
    // private variables username=usrn, displayname=dspn)
    Profile(string usrn, string dspn);
    // Default Profile constructor (username="", displayname="")
    Profile();
    // Return username
    string getUsername();
    // Return name in the format: "displayname (@username)"
    string getFullName();
    // Change display name
    string getUserWithAt();
    void setDisplayName(string dspn);
};
