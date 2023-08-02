from classes.trip import Trip


class Visitor:
    def __init__(self, name):
        self.name = name

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, name):
        if isinstance(name, str) and 1 <= len(name) <= 15:
            self._name = name
        else:
            raise Exception

    def trips(self):
        return [trip for trip in Trip.all if trip.visitor == self]  # filtering

    def national_parks(self):
        return [*set([trip.national_park for trip in self.trips()])]  # mapping
