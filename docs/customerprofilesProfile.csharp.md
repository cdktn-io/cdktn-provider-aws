# `customerprofilesProfile` Submodule <a name="`customerprofilesProfile` Submodule" id="@cdktn/provider-aws.customerprofilesProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesProfile <a name="CustomerprofilesProfile" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile aws_customerprofiles_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CustomerprofilesProfile(Construct Scope, string Id, CustomerprofilesProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig">CustomerprofilesProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig">CustomerprofilesProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress">PutAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress">PutBillingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress">PutMailingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress">PutShippingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAccountNumber">ResetAccountNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAdditionalInformation">ResetAdditionalInformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBillingAddress">ResetBillingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBirthDate">ResetBirthDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessEmailAddress">ResetBusinessEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessName">ResetBusinessName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessPhoneNumber">ResetBusinessPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetGenderString">ResetGenderString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetHomePhoneNumber">ResetHomePhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMailingAddress">ResetMailingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMiddleName">ResetMiddleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMobilePhoneNumber">ResetMobilePhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPartyTypeString">ResetPartyTypeString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPersonalEmailAddress">ResetPersonalEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetShippingAddress">ResetShippingAddress</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAddress` <a name="PutAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress"></a>

```csharp
private void PutAddress(CustomerprofilesProfileAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a>

---

##### `PutBillingAddress` <a name="PutBillingAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress"></a>

```csharp
private void PutBillingAddress(CustomerprofilesProfileBillingAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a>

---

##### `PutMailingAddress` <a name="PutMailingAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress"></a>

```csharp
private void PutMailingAddress(CustomerprofilesProfileMailingAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a>

---

##### `PutShippingAddress` <a name="PutShippingAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress"></a>

```csharp
private void PutShippingAddress(CustomerprofilesProfileShippingAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a>

---

##### `ResetAccountNumber` <a name="ResetAccountNumber" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAccountNumber"></a>

```csharp
private void ResetAccountNumber()
```

##### `ResetAdditionalInformation` <a name="ResetAdditionalInformation" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAdditionalInformation"></a>

```csharp
private void ResetAdditionalInformation()
```

##### `ResetAddress` <a name="ResetAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetBillingAddress` <a name="ResetBillingAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBillingAddress"></a>

```csharp
private void ResetBillingAddress()
```

##### `ResetBirthDate` <a name="ResetBirthDate" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBirthDate"></a>

```csharp
private void ResetBirthDate()
```

##### `ResetBusinessEmailAddress` <a name="ResetBusinessEmailAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessEmailAddress"></a>

```csharp
private void ResetBusinessEmailAddress()
```

##### `ResetBusinessName` <a name="ResetBusinessName" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessName"></a>

```csharp
private void ResetBusinessName()
```

##### `ResetBusinessPhoneNumber` <a name="ResetBusinessPhoneNumber" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessPhoneNumber"></a>

```csharp
private void ResetBusinessPhoneNumber()
```

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetEmailAddress"></a>

```csharp
private void ResetEmailAddress()
```

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetFirstName"></a>

```csharp
private void ResetFirstName()
```

##### `ResetGenderString` <a name="ResetGenderString" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetGenderString"></a>

```csharp
private void ResetGenderString()
```

##### `ResetHomePhoneNumber` <a name="ResetHomePhoneNumber" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetHomePhoneNumber"></a>

```csharp
private void ResetHomePhoneNumber()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetLastName"></a>

```csharp
private void ResetLastName()
```

##### `ResetMailingAddress` <a name="ResetMailingAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMailingAddress"></a>

```csharp
private void ResetMailingAddress()
```

##### `ResetMiddleName` <a name="ResetMiddleName" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMiddleName"></a>

```csharp
private void ResetMiddleName()
```

##### `ResetMobilePhoneNumber` <a name="ResetMobilePhoneNumber" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMobilePhoneNumber"></a>

```csharp
private void ResetMobilePhoneNumber()
```

##### `ResetPartyTypeString` <a name="ResetPartyTypeString" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPartyTypeString"></a>

```csharp
private void ResetPartyTypeString()
```

##### `ResetPersonalEmailAddress` <a name="ResetPersonalEmailAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPersonalEmailAddress"></a>

```csharp
private void ResetPersonalEmailAddress()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPhoneNumber"></a>

```csharp
private void ResetPhoneNumber()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetShippingAddress` <a name="ResetShippingAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetShippingAddress"></a>

```csharp
private void ResetShippingAddress()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CustomerprofilesProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CustomerprofilesProfile.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CustomerprofilesProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CustomerprofilesProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CustomerprofilesProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CustomerprofilesProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomerprofilesProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomerprofilesProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.address">Address</a></code> | <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference">CustomerprofilesProfileAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.billingAddress">BillingAddress</a></code> | <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference">CustomerprofilesProfileBillingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mailingAddress">MailingAddress</a></code> | <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference">CustomerprofilesProfileMailingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.shippingAddress">ShippingAddress</a></code> | <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference">CustomerprofilesProfileShippingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.accountNumberInput">AccountNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.additionalInformationInput">AdditionalInformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.addressInput">AddressInput</a></code> | <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.attributesInput">AttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.billingAddressInput">BillingAddressInput</a></code> | <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.birthDateInput">BirthDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessEmailAddressInput">BusinessEmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessNameInput">BusinessNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessPhoneNumberInput">BusinessPhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.emailAddressInput">EmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.firstNameInput">FirstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.genderStringInput">GenderStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.homePhoneNumberInput">HomePhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lastNameInput">LastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mailingAddressInput">MailingAddressInput</a></code> | <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.middleNameInput">MiddleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mobilePhoneNumberInput">MobilePhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.partyTypeStringInput">PartyTypeStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.personalEmailAddressInput">PersonalEmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.shippingAddressInput">ShippingAddressInput</a></code> | <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.accountNumber">AccountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.additionalInformation">AdditionalInformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.birthDate">BirthDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessEmailAddress">BusinessEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessName">BusinessName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessPhoneNumber">BusinessPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.genderString">GenderString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.homePhoneNumber">HomePhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.middleName">MiddleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mobilePhoneNumber">MobilePhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.partyTypeString">PartyTypeString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.personalEmailAddress">PersonalEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.address"></a>

```csharp
public CustomerprofilesProfileAddressOutputReference Address { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference">CustomerprofilesProfileAddressOutputReference</a>

---

##### `BillingAddress`<sup>Required</sup> <a name="BillingAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.billingAddress"></a>

```csharp
public CustomerprofilesProfileBillingAddressOutputReference BillingAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference">CustomerprofilesProfileBillingAddressOutputReference</a>

---

##### `MailingAddress`<sup>Required</sup> <a name="MailingAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mailingAddress"></a>

```csharp
public CustomerprofilesProfileMailingAddressOutputReference MailingAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference">CustomerprofilesProfileMailingAddressOutputReference</a>

---

##### `ShippingAddress`<sup>Required</sup> <a name="ShippingAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.shippingAddress"></a>

```csharp
public CustomerprofilesProfileShippingAddressOutputReference ShippingAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference">CustomerprofilesProfileShippingAddressOutputReference</a>

---

##### `AccountNumberInput`<sup>Optional</sup> <a name="AccountNumberInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.accountNumberInput"></a>

```csharp
public string AccountNumberInput { get; }
```

- *Type:* string

---

##### `AdditionalInformationInput`<sup>Optional</sup> <a name="AdditionalInformationInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.additionalInformationInput"></a>

```csharp
public string AdditionalInformationInput { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.addressInput"></a>

```csharp
public CustomerprofilesProfileAddress AddressInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.attributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BillingAddressInput`<sup>Optional</sup> <a name="BillingAddressInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.billingAddressInput"></a>

```csharp
public CustomerprofilesProfileBillingAddress BillingAddressInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a>

---

##### `BirthDateInput`<sup>Optional</sup> <a name="BirthDateInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.birthDateInput"></a>

```csharp
public string BirthDateInput { get; }
```

- *Type:* string

---

##### `BusinessEmailAddressInput`<sup>Optional</sup> <a name="BusinessEmailAddressInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessEmailAddressInput"></a>

```csharp
public string BusinessEmailAddressInput { get; }
```

- *Type:* string

---

##### `BusinessNameInput`<sup>Optional</sup> <a name="BusinessNameInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessNameInput"></a>

```csharp
public string BusinessNameInput { get; }
```

- *Type:* string

---

##### `BusinessPhoneNumberInput`<sup>Optional</sup> <a name="BusinessPhoneNumberInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessPhoneNumberInput"></a>

```csharp
public string BusinessPhoneNumberInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.emailAddressInput"></a>

```csharp
public string EmailAddressInput { get; }
```

- *Type:* string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.firstNameInput"></a>

```csharp
public string FirstNameInput { get; }
```

- *Type:* string

---

##### `GenderStringInput`<sup>Optional</sup> <a name="GenderStringInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.genderStringInput"></a>

```csharp
public string GenderStringInput { get; }
```

- *Type:* string

---

##### `HomePhoneNumberInput`<sup>Optional</sup> <a name="HomePhoneNumberInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.homePhoneNumberInput"></a>

```csharp
public string HomePhoneNumberInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lastNameInput"></a>

```csharp
public string LastNameInput { get; }
```

- *Type:* string

---

##### `MailingAddressInput`<sup>Optional</sup> <a name="MailingAddressInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mailingAddressInput"></a>

```csharp
public CustomerprofilesProfileMailingAddress MailingAddressInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a>

---

##### `MiddleNameInput`<sup>Optional</sup> <a name="MiddleNameInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.middleNameInput"></a>

```csharp
public string MiddleNameInput { get; }
```

- *Type:* string

---

##### `MobilePhoneNumberInput`<sup>Optional</sup> <a name="MobilePhoneNumberInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mobilePhoneNumberInput"></a>

```csharp
public string MobilePhoneNumberInput { get; }
```

- *Type:* string

---

##### `PartyTypeStringInput`<sup>Optional</sup> <a name="PartyTypeStringInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.partyTypeStringInput"></a>

```csharp
public string PartyTypeStringInput { get; }
```

- *Type:* string

---

##### `PersonalEmailAddressInput`<sup>Optional</sup> <a name="PersonalEmailAddressInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.personalEmailAddressInput"></a>

```csharp
public string PersonalEmailAddressInput { get; }
```

- *Type:* string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.phoneNumberInput"></a>

```csharp
public string PhoneNumberInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ShippingAddressInput`<sup>Optional</sup> <a name="ShippingAddressInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.shippingAddressInput"></a>

```csharp
public CustomerprofilesProfileShippingAddress ShippingAddressInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a>

---

##### `AccountNumber`<sup>Required</sup> <a name="AccountNumber" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.accountNumber"></a>

```csharp
public string AccountNumber { get; }
```

- *Type:* string

---

##### `AdditionalInformation`<sup>Required</sup> <a name="AdditionalInformation" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.additionalInformation"></a>

```csharp
public string AdditionalInformation { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BirthDate`<sup>Required</sup> <a name="BirthDate" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.birthDate"></a>

```csharp
public string BirthDate { get; }
```

- *Type:* string

---

##### `BusinessEmailAddress`<sup>Required</sup> <a name="BusinessEmailAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessEmailAddress"></a>

```csharp
public string BusinessEmailAddress { get; }
```

- *Type:* string

---

##### `BusinessName`<sup>Required</sup> <a name="BusinessName" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessName"></a>

```csharp
public string BusinessName { get; }
```

- *Type:* string

---

##### `BusinessPhoneNumber`<sup>Required</sup> <a name="BusinessPhoneNumber" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessPhoneNumber"></a>

```csharp
public string BusinessPhoneNumber { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `GenderString`<sup>Required</sup> <a name="GenderString" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.genderString"></a>

```csharp
public string GenderString { get; }
```

- *Type:* string

---

##### `HomePhoneNumber`<sup>Required</sup> <a name="HomePhoneNumber" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.homePhoneNumber"></a>

```csharp
public string HomePhoneNumber { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.middleName"></a>

```csharp
public string MiddleName { get; }
```

- *Type:* string

---

##### `MobilePhoneNumber`<sup>Required</sup> <a name="MobilePhoneNumber" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mobilePhoneNumber"></a>

```csharp
public string MobilePhoneNumber { get; }
```

- *Type:* string

---

##### `PartyTypeString`<sup>Required</sup> <a name="PartyTypeString" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.partyTypeString"></a>

```csharp
public string PartyTypeString { get; }
```

- *Type:* string

---

##### `PersonalEmailAddress`<sup>Required</sup> <a name="PersonalEmailAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.personalEmailAddress"></a>

```csharp
public string PersonalEmailAddress { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesProfileAddress <a name="CustomerprofilesProfileAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CustomerprofilesProfileAddress {
    string Address1 = null,
    string Address2 = null,
    string Address3 = null,
    string Address4 = null,
    string City = null,
    string Country = null,
    string County = null,
    string PostalCode = null,
    string Province = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address1">Address1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address2">Address2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address3">Address3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address4">Address4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.city">City</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.country">Country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.county">County</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.postalCode">PostalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.province">Province</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}. |

---

##### `Address1`<sup>Optional</sup> <a name="Address1" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address1"></a>

```csharp
public string Address1 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

##### `Address2`<sup>Optional</sup> <a name="Address2" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address2"></a>

```csharp
public string Address2 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

##### `Address3`<sup>Optional</sup> <a name="Address3" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address3"></a>

```csharp
public string Address3 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

##### `Address4`<sup>Optional</sup> <a name="Address4" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address4"></a>

```csharp
public string Address4 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

##### `County`<sup>Optional</sup> <a name="County" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.county"></a>

```csharp
public string County { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

##### `Province`<sup>Optional</sup> <a name="Province" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.province"></a>

```csharp
public string Province { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

### CustomerprofilesProfileBillingAddress <a name="CustomerprofilesProfileBillingAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CustomerprofilesProfileBillingAddress {
    string Address1 = null,
    string Address2 = null,
    string Address3 = null,
    string Address4 = null,
    string City = null,
    string Country = null,
    string County = null,
    string PostalCode = null,
    string Province = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address1">Address1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address2">Address2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address3">Address3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address4">Address4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.city">City</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.country">Country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.county">County</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.postalCode">PostalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.province">Province</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}. |

---

##### `Address1`<sup>Optional</sup> <a name="Address1" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address1"></a>

```csharp
public string Address1 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

##### `Address2`<sup>Optional</sup> <a name="Address2" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address2"></a>

```csharp
public string Address2 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

##### `Address3`<sup>Optional</sup> <a name="Address3" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address3"></a>

```csharp
public string Address3 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

##### `Address4`<sup>Optional</sup> <a name="Address4" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address4"></a>

```csharp
public string Address4 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

##### `County`<sup>Optional</sup> <a name="County" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.county"></a>

```csharp
public string County { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

##### `Province`<sup>Optional</sup> <a name="Province" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.province"></a>

```csharp
public string Province { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

### CustomerprofilesProfileConfig <a name="CustomerprofilesProfileConfig" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CustomerprofilesProfileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainName,
    string AccountNumber = null,
    string AdditionalInformation = null,
    CustomerprofilesProfileAddress Address = null,
    System.Collections.Generic.IDictionary<string, string> Attributes = null,
    CustomerprofilesProfileBillingAddress BillingAddress = null,
    string BirthDate = null,
    string BusinessEmailAddress = null,
    string BusinessName = null,
    string BusinessPhoneNumber = null,
    string EmailAddress = null,
    string FirstName = null,
    string GenderString = null,
    string HomePhoneNumber = null,
    string Id = null,
    string LastName = null,
    CustomerprofilesProfileMailingAddress MailingAddress = null,
    string MiddleName = null,
    string MobilePhoneNumber = null,
    string PartyTypeString = null,
    string PersonalEmailAddress = null,
    string PhoneNumber = null,
    string Region = null,
    CustomerprofilesProfileShippingAddress ShippingAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#domain_name CustomerprofilesProfile#domain_name}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.accountNumber">AccountNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#account_number CustomerprofilesProfile#account_number}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.additionalInformation">AdditionalInformation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#additional_information CustomerprofilesProfile#additional_information}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.address">Address</a></code> | <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a></code> | address block. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#attributes CustomerprofilesProfile#attributes}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.billingAddress">BillingAddress</a></code> | <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a></code> | billing_address block. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.birthDate">BirthDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#birth_date CustomerprofilesProfile#birth_date}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessEmailAddress">BusinessEmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#business_email_address CustomerprofilesProfile#business_email_address}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessName">BusinessName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#business_name CustomerprofilesProfile#business_name}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessPhoneNumber">BusinessPhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#business_phone_number CustomerprofilesProfile#business_phone_number}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.emailAddress">EmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#email_address CustomerprofilesProfile#email_address}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.firstName">FirstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#first_name CustomerprofilesProfile#first_name}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.genderString">GenderString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#gender_string CustomerprofilesProfile#gender_string}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.homePhoneNumber">HomePhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#home_phone_number CustomerprofilesProfile#home_phone_number}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#id CustomerprofilesProfile#id}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.lastName">LastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#last_name CustomerprofilesProfile#last_name}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.mailingAddress">MailingAddress</a></code> | <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a></code> | mailing_address block. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.middleName">MiddleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#middle_name CustomerprofilesProfile#middle_name}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.mobilePhoneNumber">MobilePhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#mobile_phone_number CustomerprofilesProfile#mobile_phone_number}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.partyTypeString">PartyTypeString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#party_type_string CustomerprofilesProfile#party_type_string}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.personalEmailAddress">PersonalEmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#personal_email_address CustomerprofilesProfile#personal_email_address}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#phone_number CustomerprofilesProfile#phone_number}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.shippingAddress">ShippingAddress</a></code> | <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a></code> | shipping_address block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#domain_name CustomerprofilesProfile#domain_name}.

---

##### `AccountNumber`<sup>Optional</sup> <a name="AccountNumber" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.accountNumber"></a>

```csharp
public string AccountNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#account_number CustomerprofilesProfile#account_number}.

---

##### `AdditionalInformation`<sup>Optional</sup> <a name="AdditionalInformation" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.additionalInformation"></a>

```csharp
public string AdditionalInformation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#additional_information CustomerprofilesProfile#additional_information}.

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.address"></a>

```csharp
public CustomerprofilesProfileAddress Address { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a>

address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address CustomerprofilesProfile#address}

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#attributes CustomerprofilesProfile#attributes}.

---

##### `BillingAddress`<sup>Optional</sup> <a name="BillingAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.billingAddress"></a>

```csharp
public CustomerprofilesProfileBillingAddress BillingAddress { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a>

billing_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#billing_address CustomerprofilesProfile#billing_address}

---

##### `BirthDate`<sup>Optional</sup> <a name="BirthDate" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.birthDate"></a>

```csharp
public string BirthDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#birth_date CustomerprofilesProfile#birth_date}.

---

##### `BusinessEmailAddress`<sup>Optional</sup> <a name="BusinessEmailAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessEmailAddress"></a>

```csharp
public string BusinessEmailAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#business_email_address CustomerprofilesProfile#business_email_address}.

---

##### `BusinessName`<sup>Optional</sup> <a name="BusinessName" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessName"></a>

```csharp
public string BusinessName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#business_name CustomerprofilesProfile#business_name}.

---

##### `BusinessPhoneNumber`<sup>Optional</sup> <a name="BusinessPhoneNumber" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessPhoneNumber"></a>

```csharp
public string BusinessPhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#business_phone_number CustomerprofilesProfile#business_phone_number}.

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.emailAddress"></a>

```csharp
public string EmailAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#email_address CustomerprofilesProfile#email_address}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.firstName"></a>

```csharp
public string FirstName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#first_name CustomerprofilesProfile#first_name}.

---

##### `GenderString`<sup>Optional</sup> <a name="GenderString" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.genderString"></a>

```csharp
public string GenderString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#gender_string CustomerprofilesProfile#gender_string}.

---

##### `HomePhoneNumber`<sup>Optional</sup> <a name="HomePhoneNumber" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.homePhoneNumber"></a>

```csharp
public string HomePhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#home_phone_number CustomerprofilesProfile#home_phone_number}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#id CustomerprofilesProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.lastName"></a>

```csharp
public string LastName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#last_name CustomerprofilesProfile#last_name}.

---

##### `MailingAddress`<sup>Optional</sup> <a name="MailingAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.mailingAddress"></a>

```csharp
public CustomerprofilesProfileMailingAddress MailingAddress { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a>

mailing_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#mailing_address CustomerprofilesProfile#mailing_address}

---

##### `MiddleName`<sup>Optional</sup> <a name="MiddleName" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.middleName"></a>

```csharp
public string MiddleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#middle_name CustomerprofilesProfile#middle_name}.

---

##### `MobilePhoneNumber`<sup>Optional</sup> <a name="MobilePhoneNumber" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.mobilePhoneNumber"></a>

```csharp
public string MobilePhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#mobile_phone_number CustomerprofilesProfile#mobile_phone_number}.

---

##### `PartyTypeString`<sup>Optional</sup> <a name="PartyTypeString" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.partyTypeString"></a>

```csharp
public string PartyTypeString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#party_type_string CustomerprofilesProfile#party_type_string}.

---

##### `PersonalEmailAddress`<sup>Optional</sup> <a name="PersonalEmailAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.personalEmailAddress"></a>

```csharp
public string PersonalEmailAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#personal_email_address CustomerprofilesProfile#personal_email_address}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#phone_number CustomerprofilesProfile#phone_number}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#region CustomerprofilesProfile#region}

---

##### `ShippingAddress`<sup>Optional</sup> <a name="ShippingAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.shippingAddress"></a>

```csharp
public CustomerprofilesProfileShippingAddress ShippingAddress { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a>

shipping_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#shipping_address CustomerprofilesProfile#shipping_address}

---

### CustomerprofilesProfileMailingAddress <a name="CustomerprofilesProfileMailingAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CustomerprofilesProfileMailingAddress {
    string Address1 = null,
    string Address2 = null,
    string Address3 = null,
    string Address4 = null,
    string City = null,
    string Country = null,
    string County = null,
    string PostalCode = null,
    string Province = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address1">Address1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address2">Address2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address3">Address3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address4">Address4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.city">City</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.country">Country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.county">County</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.postalCode">PostalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.province">Province</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}. |

---

##### `Address1`<sup>Optional</sup> <a name="Address1" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address1"></a>

```csharp
public string Address1 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

##### `Address2`<sup>Optional</sup> <a name="Address2" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address2"></a>

```csharp
public string Address2 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

##### `Address3`<sup>Optional</sup> <a name="Address3" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address3"></a>

```csharp
public string Address3 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

##### `Address4`<sup>Optional</sup> <a name="Address4" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address4"></a>

```csharp
public string Address4 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

##### `County`<sup>Optional</sup> <a name="County" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.county"></a>

```csharp
public string County { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

##### `Province`<sup>Optional</sup> <a name="Province" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.province"></a>

```csharp
public string Province { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

### CustomerprofilesProfileShippingAddress <a name="CustomerprofilesProfileShippingAddress" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CustomerprofilesProfileShippingAddress {
    string Address1 = null,
    string Address2 = null,
    string Address3 = null,
    string Address4 = null,
    string City = null,
    string Country = null,
    string County = null,
    string PostalCode = null,
    string Province = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address1">Address1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address2">Address2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address3">Address3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address4">Address4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.city">City</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.country">Country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.county">County</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.postalCode">PostalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.province">Province</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}. |

---

##### `Address1`<sup>Optional</sup> <a name="Address1" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address1"></a>

```csharp
public string Address1 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

##### `Address2`<sup>Optional</sup> <a name="Address2" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address2"></a>

```csharp
public string Address2 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

##### `Address3`<sup>Optional</sup> <a name="Address3" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address3"></a>

```csharp
public string Address3 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

##### `Address4`<sup>Optional</sup> <a name="Address4" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address4"></a>

```csharp
public string Address4 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.city"></a>

```csharp
public string City { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.country"></a>

```csharp
public string Country { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

##### `County`<sup>Optional</sup> <a name="County" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.county"></a>

```csharp
public string County { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.postalCode"></a>

```csharp
public string PostalCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

##### `Province`<sup>Optional</sup> <a name="Province" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.province"></a>

```csharp
public string Province { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesProfileAddressOutputReference <a name="CustomerprofilesProfileAddressOutputReference" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CustomerprofilesProfileAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress1">ResetAddress1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress2">ResetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress3">ResetAddress3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress4">ResetAddress4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCounty">ResetCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetProvince">ResetProvince</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress1` <a name="ResetAddress1" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress1"></a>

```csharp
private void ResetAddress1()
```

##### `ResetAddress2` <a name="ResetAddress2" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress2"></a>

```csharp
private void ResetAddress2()
```

##### `ResetAddress3` <a name="ResetAddress3" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress3"></a>

```csharp
private void ResetAddress3()
```

##### `ResetAddress4` <a name="ResetAddress4" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress4"></a>

```csharp
private void ResetAddress4()
```

##### `ResetCity` <a name="ResetCity" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCity"></a>

```csharp
private void ResetCity()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCountry"></a>

```csharp
private void ResetCountry()
```

##### `ResetCounty` <a name="ResetCounty" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCounty"></a>

```csharp
private void ResetCounty()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetProvince` <a name="ResetProvince" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetProvince"></a>

```csharp
private void ResetProvince()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetState"></a>

```csharp
private void ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address1Input">Address1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address2Input">Address2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address3Input">Address3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address4Input">Address4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.countyInput">CountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.provinceInput">ProvinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address1">Address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address2">Address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address3">Address3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address4">Address4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.county">County</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.province">Province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address1Input`<sup>Optional</sup> <a name="Address1Input" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address1Input"></a>

```csharp
public string Address1Input { get; }
```

- *Type:* string

---

##### `Address2Input`<sup>Optional</sup> <a name="Address2Input" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address2Input"></a>

```csharp
public string Address2Input { get; }
```

- *Type:* string

---

##### `Address3Input`<sup>Optional</sup> <a name="Address3Input" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address3Input"></a>

```csharp
public string Address3Input { get; }
```

- *Type:* string

---

##### `Address4Input`<sup>Optional</sup> <a name="Address4Input" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address4Input"></a>

```csharp
public string Address4Input { get; }
```

- *Type:* string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `CountyInput`<sup>Optional</sup> <a name="CountyInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.countyInput"></a>

```csharp
public string CountyInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `ProvinceInput`<sup>Optional</sup> <a name="ProvinceInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.provinceInput"></a>

```csharp
public string ProvinceInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address1"></a>

```csharp
public string Address1 { get; }
```

- *Type:* string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address2"></a>

```csharp
public string Address2 { get; }
```

- *Type:* string

---

##### `Address3`<sup>Required</sup> <a name="Address3" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address3"></a>

```csharp
public string Address3 { get; }
```

- *Type:* string

---

##### `Address4`<sup>Required</sup> <a name="Address4" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address4"></a>

```csharp
public string Address4 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `County`<sup>Required</sup> <a name="County" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.county"></a>

```csharp
public string County { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Province`<sup>Required</sup> <a name="Province" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.province"></a>

```csharp
public string Province { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesProfileAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a>

---


### CustomerprofilesProfileBillingAddressOutputReference <a name="CustomerprofilesProfileBillingAddressOutputReference" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CustomerprofilesProfileBillingAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress1">ResetAddress1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress2">ResetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress3">ResetAddress3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress4">ResetAddress4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCounty">ResetCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetProvince">ResetProvince</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress1` <a name="ResetAddress1" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress1"></a>

```csharp
private void ResetAddress1()
```

##### `ResetAddress2` <a name="ResetAddress2" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress2"></a>

```csharp
private void ResetAddress2()
```

##### `ResetAddress3` <a name="ResetAddress3" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress3"></a>

```csharp
private void ResetAddress3()
```

##### `ResetAddress4` <a name="ResetAddress4" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress4"></a>

```csharp
private void ResetAddress4()
```

##### `ResetCity` <a name="ResetCity" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCity"></a>

```csharp
private void ResetCity()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCountry"></a>

```csharp
private void ResetCountry()
```

##### `ResetCounty` <a name="ResetCounty" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCounty"></a>

```csharp
private void ResetCounty()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetProvince` <a name="ResetProvince" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetProvince"></a>

```csharp
private void ResetProvince()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetState"></a>

```csharp
private void ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address1Input">Address1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address2Input">Address2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address3Input">Address3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address4Input">Address4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.countyInput">CountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.provinceInput">ProvinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address1">Address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address2">Address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address3">Address3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address4">Address4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.county">County</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.province">Province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address1Input`<sup>Optional</sup> <a name="Address1Input" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address1Input"></a>

```csharp
public string Address1Input { get; }
```

- *Type:* string

---

##### `Address2Input`<sup>Optional</sup> <a name="Address2Input" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address2Input"></a>

```csharp
public string Address2Input { get; }
```

- *Type:* string

---

##### `Address3Input`<sup>Optional</sup> <a name="Address3Input" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address3Input"></a>

```csharp
public string Address3Input { get; }
```

- *Type:* string

---

##### `Address4Input`<sup>Optional</sup> <a name="Address4Input" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address4Input"></a>

```csharp
public string Address4Input { get; }
```

- *Type:* string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `CountyInput`<sup>Optional</sup> <a name="CountyInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.countyInput"></a>

```csharp
public string CountyInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `ProvinceInput`<sup>Optional</sup> <a name="ProvinceInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.provinceInput"></a>

```csharp
public string ProvinceInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address1"></a>

```csharp
public string Address1 { get; }
```

- *Type:* string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address2"></a>

```csharp
public string Address2 { get; }
```

- *Type:* string

---

##### `Address3`<sup>Required</sup> <a name="Address3" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address3"></a>

```csharp
public string Address3 { get; }
```

- *Type:* string

---

##### `Address4`<sup>Required</sup> <a name="Address4" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address4"></a>

```csharp
public string Address4 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `County`<sup>Required</sup> <a name="County" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.county"></a>

```csharp
public string County { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Province`<sup>Required</sup> <a name="Province" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.province"></a>

```csharp
public string Province { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesProfileBillingAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a>

---


### CustomerprofilesProfileMailingAddressOutputReference <a name="CustomerprofilesProfileMailingAddressOutputReference" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CustomerprofilesProfileMailingAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress1">ResetAddress1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress2">ResetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress3">ResetAddress3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress4">ResetAddress4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCounty">ResetCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetProvince">ResetProvince</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress1` <a name="ResetAddress1" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress1"></a>

```csharp
private void ResetAddress1()
```

##### `ResetAddress2` <a name="ResetAddress2" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress2"></a>

```csharp
private void ResetAddress2()
```

##### `ResetAddress3` <a name="ResetAddress3" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress3"></a>

```csharp
private void ResetAddress3()
```

##### `ResetAddress4` <a name="ResetAddress4" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress4"></a>

```csharp
private void ResetAddress4()
```

##### `ResetCity` <a name="ResetCity" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCity"></a>

```csharp
private void ResetCity()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCountry"></a>

```csharp
private void ResetCountry()
```

##### `ResetCounty` <a name="ResetCounty" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCounty"></a>

```csharp
private void ResetCounty()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetProvince` <a name="ResetProvince" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetProvince"></a>

```csharp
private void ResetProvince()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetState"></a>

```csharp
private void ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address1Input">Address1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address2Input">Address2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address3Input">Address3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address4Input">Address4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.countyInput">CountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.provinceInput">ProvinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address1">Address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address2">Address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address3">Address3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address4">Address4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.county">County</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.province">Province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address1Input`<sup>Optional</sup> <a name="Address1Input" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address1Input"></a>

```csharp
public string Address1Input { get; }
```

- *Type:* string

---

##### `Address2Input`<sup>Optional</sup> <a name="Address2Input" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address2Input"></a>

```csharp
public string Address2Input { get; }
```

- *Type:* string

---

##### `Address3Input`<sup>Optional</sup> <a name="Address3Input" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address3Input"></a>

```csharp
public string Address3Input { get; }
```

- *Type:* string

---

##### `Address4Input`<sup>Optional</sup> <a name="Address4Input" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address4Input"></a>

```csharp
public string Address4Input { get; }
```

- *Type:* string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `CountyInput`<sup>Optional</sup> <a name="CountyInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.countyInput"></a>

```csharp
public string CountyInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `ProvinceInput`<sup>Optional</sup> <a name="ProvinceInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.provinceInput"></a>

```csharp
public string ProvinceInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address1"></a>

```csharp
public string Address1 { get; }
```

- *Type:* string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address2"></a>

```csharp
public string Address2 { get; }
```

- *Type:* string

---

##### `Address3`<sup>Required</sup> <a name="Address3" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address3"></a>

```csharp
public string Address3 { get; }
```

- *Type:* string

---

##### `Address4`<sup>Required</sup> <a name="Address4" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address4"></a>

```csharp
public string Address4 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `County`<sup>Required</sup> <a name="County" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.county"></a>

```csharp
public string County { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Province`<sup>Required</sup> <a name="Province" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.province"></a>

```csharp
public string Province { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesProfileMailingAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a>

---


### CustomerprofilesProfileShippingAddressOutputReference <a name="CustomerprofilesProfileShippingAddressOutputReference" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CustomerprofilesProfileShippingAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress1">ResetAddress1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress2">ResetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress3">ResetAddress3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress4">ResetAddress4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCounty">ResetCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetProvince">ResetProvince</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress1` <a name="ResetAddress1" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress1"></a>

```csharp
private void ResetAddress1()
```

##### `ResetAddress2` <a name="ResetAddress2" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress2"></a>

```csharp
private void ResetAddress2()
```

##### `ResetAddress3` <a name="ResetAddress3" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress3"></a>

```csharp
private void ResetAddress3()
```

##### `ResetAddress4` <a name="ResetAddress4" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress4"></a>

```csharp
private void ResetAddress4()
```

##### `ResetCity` <a name="ResetCity" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCity"></a>

```csharp
private void ResetCity()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCountry"></a>

```csharp
private void ResetCountry()
```

##### `ResetCounty` <a name="ResetCounty" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCounty"></a>

```csharp
private void ResetCounty()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetPostalCode"></a>

```csharp
private void ResetPostalCode()
```

##### `ResetProvince` <a name="ResetProvince" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetProvince"></a>

```csharp
private void ResetProvince()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetState"></a>

```csharp
private void ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address1Input">Address1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address2Input">Address2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address3Input">Address3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address4Input">Address4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.cityInput">CityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.countryInput">CountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.countyInput">CountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.provinceInput">ProvinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address1">Address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address2">Address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address3">Address3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address4">Address4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.county">County</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.province">Province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address1Input`<sup>Optional</sup> <a name="Address1Input" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address1Input"></a>

```csharp
public string Address1Input { get; }
```

- *Type:* string

---

##### `Address2Input`<sup>Optional</sup> <a name="Address2Input" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address2Input"></a>

```csharp
public string Address2Input { get; }
```

- *Type:* string

---

##### `Address3Input`<sup>Optional</sup> <a name="Address3Input" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address3Input"></a>

```csharp
public string Address3Input { get; }
```

- *Type:* string

---

##### `Address4Input`<sup>Optional</sup> <a name="Address4Input" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address4Input"></a>

```csharp
public string Address4Input { get; }
```

- *Type:* string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.cityInput"></a>

```csharp
public string CityInput { get; }
```

- *Type:* string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.countryInput"></a>

```csharp
public string CountryInput { get; }
```

- *Type:* string

---

##### `CountyInput`<sup>Optional</sup> <a name="CountyInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.countyInput"></a>

```csharp
public string CountyInput { get; }
```

- *Type:* string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.postalCodeInput"></a>

```csharp
public string PostalCodeInput { get; }
```

- *Type:* string

---

##### `ProvinceInput`<sup>Optional</sup> <a name="ProvinceInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.provinceInput"></a>

```csharp
public string ProvinceInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address1"></a>

```csharp
public string Address1 { get; }
```

- *Type:* string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address2"></a>

```csharp
public string Address2 { get; }
```

- *Type:* string

---

##### `Address3`<sup>Required</sup> <a name="Address3" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address3"></a>

```csharp
public string Address3 { get; }
```

- *Type:* string

---

##### `Address4`<sup>Required</sup> <a name="Address4" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address4"></a>

```csharp
public string Address4 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `County`<sup>Required</sup> <a name="County" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.county"></a>

```csharp
public string County { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Province`<sup>Required</sup> <a name="Province" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.province"></a>

```csharp
public string Province { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesProfileShippingAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a>

---



