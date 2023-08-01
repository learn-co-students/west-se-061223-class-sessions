#!/usr/bin/env python3
import ipdb
from classes.coffee import Coffee
from classes.customer import Customer
from classes.order import Order

if __name__ == "__main__":
    barbie = Customer("Barbie")
    ken = Customer("Ken")
    mocha = Coffee("Mocha")
    latte = Coffee("Latte")
    o1 = Order(barbie, latte, 4)
    o2 = Order(barbie, mocha, 5)
    o3 = Order(ken, mocha, 5)

    ipdb.set_trace()
