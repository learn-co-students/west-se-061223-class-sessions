from classes.order import Order


class Coffee:
    def __init__(self, name):
        self.name = name

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        if isinstance(value, str) and not hasattr(self, "name"):
            self._name = value
        else:
            raise Exception("invalid operation")

    def orders(self):
        return [order for order in Order.all if order.coffee == self]

    def customers(self):
        return [*set([order.customer for order in self.orders()])]

    def num_orders(self):
        return len(self.orders())

    def average_price(self):
        return sum([order.price for order in self.orders()]) / self.num_orders()
