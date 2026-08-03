/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/shield_proactive_engagement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ShieldProactiveEngagementConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/shield_proactive_engagement#enabled ShieldProactiveEngagement#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * emergency_contact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/shield_proactive_engagement#emergency_contact ShieldProactiveEngagement#emergency_contact}
  */
  readonly emergencyContact?: ShieldProactiveEngagementEmergencyContact[] | cdktn.IResolvable;
}
export interface ShieldProactiveEngagementEmergencyContact {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/shield_proactive_engagement#contact_notes ShieldProactiveEngagement#contact_notes}
  */
  readonly contactNotes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/shield_proactive_engagement#email_address ShieldProactiveEngagement#email_address}
  */
  readonly emailAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/shield_proactive_engagement#phone_number ShieldProactiveEngagement#phone_number}
  */
  readonly phoneNumber?: string;
}

export function shieldProactiveEngagementEmergencyContactToTerraform(struct?: ShieldProactiveEngagementEmergencyContact | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    contact_notes: cdktn.stringToTerraform(struct!.contactNotes),
    email_address: cdktn.stringToTerraform(struct!.emailAddress),
    phone_number: cdktn.stringToTerraform(struct!.phoneNumber),
  }
}


export function shieldProactiveEngagementEmergencyContactToHclTerraform(struct?: ShieldProactiveEngagementEmergencyContact | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    contact_notes: {
      value: cdktn.stringToHclTerraform(struct!.contactNotes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_address: {
      value: cdktn.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number: {
      value: cdktn.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ShieldProactiveEngagementEmergencyContactOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ShieldProactiveEngagementEmergencyContact | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactNotes !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactNotes = this._contactNotes;
    }
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShieldProactiveEngagementEmergencyContact | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contactNotes = undefined;
      this._emailAddress = undefined;
      this._phoneNumber = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contactNotes = value.contactNotes;
      this._emailAddress = value.emailAddress;
      this._phoneNumber = value.phoneNumber;
    }
  }

  // contact_notes - computed: false, optional: true, required: false
  private _contactNotes?: string; 
  public get contactNotes() {
    return this.getStringAttribute('contact_notes');
  }
  public set contactNotes(value: string) {
    this._contactNotes = value;
  }
  public resetContactNotes() {
    this._contactNotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactNotesInput() {
    return this._contactNotes;
  }

  // email_address - computed: false, optional: false, required: true
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // phone_number - computed: false, optional: true, required: false
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }
}

export class ShieldProactiveEngagementEmergencyContactList extends cdktn.ComplexList {
  public internalValue? : ShieldProactiveEngagementEmergencyContact[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ShieldProactiveEngagementEmergencyContactOutputReference {
    return new ShieldProactiveEngagementEmergencyContactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/shield_proactive_engagement aws_shield_proactive_engagement}
*/
export class ShieldProactiveEngagement extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_shield_proactive_engagement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ShieldProactiveEngagement resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ShieldProactiveEngagement to import
  * @param importFromId The id of the existing ShieldProactiveEngagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/shield_proactive_engagement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ShieldProactiveEngagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_shield_proactive_engagement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/shield_proactive_engagement aws_shield_proactive_engagement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ShieldProactiveEngagementConfig
  */
  public constructor(scope: Construct, id: string, config: ShieldProactiveEngagementConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_shield_proactive_engagement',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.57.1',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._emergencyContact.internalValue = config.emergencyContact;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // emergency_contact - computed: false, optional: true, required: false
  private _emergencyContact = new ShieldProactiveEngagementEmergencyContactList(this, "emergency_contact", false);
  public get emergencyContact() {
    return this._emergencyContact;
  }
  public putEmergencyContact(value: ShieldProactiveEngagementEmergencyContact[] | cdktn.IResolvable) {
    this._emergencyContact.internalValue = value;
  }
  public resetEmergencyContact() {
    this._emergencyContact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emergencyContactInput() {
    return this._emergencyContact.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktn.booleanToTerraform(this._enabled),
      emergency_contact: cdktn.listMapper(shieldProactiveEngagementEmergencyContactToTerraform, true)(this._emergencyContact.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      emergency_contact: {
        value: cdktn.listMapperHcl(shieldProactiveEngagementEmergencyContactToHclTerraform, true)(this._emergencyContact.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ShieldProactiveEngagementEmergencyContactList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
