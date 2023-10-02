//
//  RCTCalendarModule.m
//  ReactNativeModule
//
//  Created by ashutosh kailkhura on 01/10/23.
//

#import <Foundation/Foundation.h>
// RCTCalendarModule.m
#import "RCTCalendarModule.h"
#import <React/RCTLog.h>

@implementation RCTCalendarModule

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
{
 RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}
// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE();

@end
