def filter_dicts(dicts, search_string):
    filtered_dicts = []

    for d in dicts:
        for key, value in d.items():
            if isinstance(value, str) and search_string.lower() in value.lower():
                filtered_dicts.append(d)
                break

    return filtered_dicts
