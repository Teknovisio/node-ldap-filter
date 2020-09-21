 
declare module ldapFilter { 
 
  class Filter { 
    matches(obj: any): boolean; 
    type: string; 
  } 
 
  function parse(filterString: string): Filter; 
 
  class EqualityFilter extends Filter { 
    constructor(options: { attribute: string, value: string }) 
  } 
 
  class PresenceFilter extends Filter { 
    constructor(options: { attribute: string }) 
  } 
 
  class SubstringFilter extends Filter { 
    // eslint-disable-next-line id-blacklist 
    constructor(options: { attribute: string, initial: string, any?: string[], final?: string }) 
  } 
 
  class GreaterThanEqualsFilter extends Filter { 
    constructor(options: { attribute: string, value: string }) 
  } 
 
  class LessThanEqualsFilter extends Filter { 
    constructor(options: { attribute: string, value: string }) 
  } 
 
  class AndFilter extends Filter { 
    constructor(options: { filters: Filter[] }) 
  } 
 
  class OrFilter extends Filter { 
    constructor(options: { filters: Filter[] }) 
  } 
 
  class NotFilter extends Filter { 
    constructor(options: { filter: Filter }) 
  } 
 
  class ApproximateFilter extends Filter { 
    constructor(options: { attribute: string, value: string }) 
  } 
 
  class ExtensibleFilter extends Filter { 
    constructor(options: { 
      rule?: string, 
      matchType?: string, 
      value: string, 
      dnAttributes?: boolean 
    }) 
  } 
 
}

export = ldapFilter
