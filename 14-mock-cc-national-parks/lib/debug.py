#!/usr/bin/env python3
import ipdb
from classes.national_park import NationalPark
from classes.trip import Trip
from classes.visitor import Visitor

if __name__ == "__main__":
    p1 = NationalPark("Yosemmette")
    vis = Visitor("Bill")
    vis2 = Visitor("Steve")
    t_1 = Trip(vis, p1, "May 5th", "May 9th")

    ipdb.set_trace()
