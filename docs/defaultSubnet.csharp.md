# `defaultSubnet` Submodule <a name="`defaultSubnet` Submodule" id="@cdktn/provider-aws.defaultSubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultSubnet <a name="DefaultSubnet" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet aws_default_subnet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DefaultSubnet(Construct Scope, string Id, DefaultSubnetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig">DefaultSubnetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig">DefaultSubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetAssignIpv6AddressOnCreation">ResetAssignIpv6AddressOnCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetCustomerOwnedIpv4Pool">ResetCustomerOwnedIpv4Pool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetEnableDns64">ResetEnableDns64</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetEnableResourceNameDnsAaaaRecordOnLaunch">ResetEnableResourceNameDnsAaaaRecordOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetEnableResourceNameDnsARecordOnLaunch">ResetEnableResourceNameDnsARecordOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetIpv6CidrBlock">ResetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetIpv6Native">ResetIpv6Native</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetMapCustomerOwnedIpOnLaunch">ResetMapCustomerOwnedIpOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetMapPublicIpOnLaunch">ResetMapPublicIpOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetPrivateDnsHostnameTypeOnLaunch">ResetPrivateDnsHostnameTypeOnLaunch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.putTimeouts"></a>

```csharp
private void PutTimeouts(DefaultSubnetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeouts">DefaultSubnetTimeouts</a>

---

##### `ResetAssignIpv6AddressOnCreation` <a name="ResetAssignIpv6AddressOnCreation" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetAssignIpv6AddressOnCreation"></a>

```csharp
private void ResetAssignIpv6AddressOnCreation()
```

##### `ResetCustomerOwnedIpv4Pool` <a name="ResetCustomerOwnedIpv4Pool" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetCustomerOwnedIpv4Pool"></a>

```csharp
private void ResetCustomerOwnedIpv4Pool()
```

##### `ResetEnableDns64` <a name="ResetEnableDns64" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetEnableDns64"></a>

```csharp
private void ResetEnableDns64()
```

##### `ResetEnableResourceNameDnsAaaaRecordOnLaunch` <a name="ResetEnableResourceNameDnsAaaaRecordOnLaunch" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetEnableResourceNameDnsAaaaRecordOnLaunch"></a>

```csharp
private void ResetEnableResourceNameDnsAaaaRecordOnLaunch()
```

##### `ResetEnableResourceNameDnsARecordOnLaunch` <a name="ResetEnableResourceNameDnsARecordOnLaunch" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetEnableResourceNameDnsARecordOnLaunch"></a>

```csharp
private void ResetEnableResourceNameDnsARecordOnLaunch()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpv6CidrBlock` <a name="ResetIpv6CidrBlock" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetIpv6CidrBlock"></a>

```csharp
private void ResetIpv6CidrBlock()
```

##### `ResetIpv6Native` <a name="ResetIpv6Native" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetIpv6Native"></a>

```csharp
private void ResetIpv6Native()
```

##### `ResetMapCustomerOwnedIpOnLaunch` <a name="ResetMapCustomerOwnedIpOnLaunch" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetMapCustomerOwnedIpOnLaunch"></a>

```csharp
private void ResetMapCustomerOwnedIpOnLaunch()
```

##### `ResetMapPublicIpOnLaunch` <a name="ResetMapPublicIpOnLaunch" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetMapPublicIpOnLaunch"></a>

```csharp
private void ResetMapPublicIpOnLaunch()
```

##### `ResetPrivateDnsHostnameTypeOnLaunch` <a name="ResetPrivateDnsHostnameTypeOnLaunch" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetPrivateDnsHostnameTypeOnLaunch"></a>

```csharp
private void ResetPrivateDnsHostnameTypeOnLaunch()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DefaultSubnet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DefaultSubnet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DefaultSubnet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DefaultSubnet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DefaultSubnet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DefaultSubnet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DefaultSubnet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DefaultSubnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DefaultSubnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.enableLniAtDeviceIndex">EnableLniAtDeviceIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.existingDefaultSubnet">ExistingDefaultSubnet</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlockAssociationId">Ipv6CidrBlockAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.outpostArn">OutpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference">DefaultSubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.assignIpv6AddressOnCreationInput">AssignIpv6AddressOnCreationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.customerOwnedIpv4PoolInput">CustomerOwnedIpv4PoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.enableDns64Input">EnableDns64Input</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsAaaaRecordOnLaunchInput">EnableResourceNameDnsAaaaRecordOnLaunchInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsARecordOnLaunchInput">EnableResourceNameDnsARecordOnLaunchInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlockInput">Ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6NativeInput">Ipv6NativeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.mapCustomerOwnedIpOnLaunchInput">MapCustomerOwnedIpOnLaunchInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.mapPublicIpOnLaunchInput">MapPublicIpOnLaunchInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.privateDnsHostnameTypeOnLaunchInput">PrivateDnsHostnameTypeOnLaunchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeouts">DefaultSubnetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.assignIpv6AddressOnCreation">AssignIpv6AddressOnCreation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.customerOwnedIpv4Pool">CustomerOwnedIpv4Pool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.enableDns64">EnableDns64</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsAaaaRecordOnLaunch">EnableResourceNameDnsAaaaRecordOnLaunch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsARecordOnLaunch">EnableResourceNameDnsARecordOnLaunch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.forceDestroy">ForceDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6Native">Ipv6Native</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.mapCustomerOwnedIpOnLaunch">MapCustomerOwnedIpOnLaunch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.mapPublicIpOnLaunch">MapPublicIpOnLaunch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.privateDnsHostnameTypeOnLaunch">PrivateDnsHostnameTypeOnLaunch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `EnableLniAtDeviceIndex`<sup>Required</sup> <a name="EnableLniAtDeviceIndex" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.enableLniAtDeviceIndex"></a>

```csharp
public double EnableLniAtDeviceIndex { get; }
```

- *Type:* double

---

##### `ExistingDefaultSubnet`<sup>Required</sup> <a name="ExistingDefaultSubnet" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.existingDefaultSubnet"></a>

```csharp
public IResolvable ExistingDefaultSubnet { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Ipv6CidrBlockAssociationId`<sup>Required</sup> <a name="Ipv6CidrBlockAssociationId" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlockAssociationId"></a>

```csharp
public string Ipv6CidrBlockAssociationId { get; }
```

- *Type:* string

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.outpostArn"></a>

```csharp
public string OutpostArn { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.timeouts"></a>

```csharp
public DefaultSubnetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference">DefaultSubnetTimeoutsOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `AssignIpv6AddressOnCreationInput`<sup>Optional</sup> <a name="AssignIpv6AddressOnCreationInput" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.assignIpv6AddressOnCreationInput"></a>

```csharp
public bool|IResolvable AssignIpv6AddressOnCreationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `CustomerOwnedIpv4PoolInput`<sup>Optional</sup> <a name="CustomerOwnedIpv4PoolInput" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.customerOwnedIpv4PoolInput"></a>

```csharp
public string CustomerOwnedIpv4PoolInput { get; }
```

- *Type:* string

---

##### `EnableDns64Input`<sup>Optional</sup> <a name="EnableDns64Input" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.enableDns64Input"></a>

```csharp
public bool|IResolvable EnableDns64Input { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableResourceNameDnsAaaaRecordOnLaunchInput`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecordOnLaunchInput" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsAaaaRecordOnLaunchInput"></a>

```csharp
public bool|IResolvable EnableResourceNameDnsAaaaRecordOnLaunchInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableResourceNameDnsARecordOnLaunchInput`<sup>Optional</sup> <a name="EnableResourceNameDnsARecordOnLaunchInput" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsARecordOnLaunchInput"></a>

```csharp
public bool|IResolvable EnableResourceNameDnsARecordOnLaunchInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.forceDestroyInput"></a>

```csharp
public bool|IResolvable ForceDestroyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Ipv6CidrBlockInput`<sup>Optional</sup> <a name="Ipv6CidrBlockInput" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlockInput"></a>

```csharp
public string Ipv6CidrBlockInput { get; }
```

- *Type:* string

---

##### `Ipv6NativeInput`<sup>Optional</sup> <a name="Ipv6NativeInput" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6NativeInput"></a>

```csharp
public bool|IResolvable Ipv6NativeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MapCustomerOwnedIpOnLaunchInput`<sup>Optional</sup> <a name="MapCustomerOwnedIpOnLaunchInput" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.mapCustomerOwnedIpOnLaunchInput"></a>

```csharp
public bool|IResolvable MapCustomerOwnedIpOnLaunchInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MapPublicIpOnLaunchInput`<sup>Optional</sup> <a name="MapPublicIpOnLaunchInput" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.mapPublicIpOnLaunchInput"></a>

```csharp
public bool|IResolvable MapPublicIpOnLaunchInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrivateDnsHostnameTypeOnLaunchInput`<sup>Optional</sup> <a name="PrivateDnsHostnameTypeOnLaunchInput" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.privateDnsHostnameTypeOnLaunchInput"></a>

```csharp
public string PrivateDnsHostnameTypeOnLaunchInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.timeoutsInput"></a>

```csharp
public IResolvable|DefaultSubnetTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeouts">DefaultSubnetTimeouts</a>

---

##### `AssignIpv6AddressOnCreation`<sup>Required</sup> <a name="AssignIpv6AddressOnCreation" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.assignIpv6AddressOnCreation"></a>

```csharp
public bool|IResolvable AssignIpv6AddressOnCreation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `CustomerOwnedIpv4Pool`<sup>Required</sup> <a name="CustomerOwnedIpv4Pool" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.customerOwnedIpv4Pool"></a>

```csharp
public string CustomerOwnedIpv4Pool { get; }
```

- *Type:* string

---

##### `EnableDns64`<sup>Required</sup> <a name="EnableDns64" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.enableDns64"></a>

```csharp
public bool|IResolvable EnableDns64 { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableResourceNameDnsAaaaRecordOnLaunch`<sup>Required</sup> <a name="EnableResourceNameDnsAaaaRecordOnLaunch" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsAaaaRecordOnLaunch"></a>

```csharp
public bool|IResolvable EnableResourceNameDnsAaaaRecordOnLaunch { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableResourceNameDnsARecordOnLaunch`<sup>Required</sup> <a name="EnableResourceNameDnsARecordOnLaunch" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.enableResourceNameDnsARecordOnLaunch"></a>

```csharp
public bool|IResolvable EnableResourceNameDnsARecordOnLaunch { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.forceDestroy"></a>

```csharp
public bool|IResolvable ForceDestroy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; }
```

- *Type:* string

---

##### `Ipv6Native`<sup>Required</sup> <a name="Ipv6Native" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.ipv6Native"></a>

```csharp
public bool|IResolvable Ipv6Native { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MapCustomerOwnedIpOnLaunch`<sup>Required</sup> <a name="MapCustomerOwnedIpOnLaunch" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.mapCustomerOwnedIpOnLaunch"></a>

```csharp
public bool|IResolvable MapCustomerOwnedIpOnLaunch { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MapPublicIpOnLaunch`<sup>Required</sup> <a name="MapPublicIpOnLaunch" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.mapPublicIpOnLaunch"></a>

```csharp
public bool|IResolvable MapPublicIpOnLaunch { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrivateDnsHostnameTypeOnLaunch`<sup>Required</sup> <a name="PrivateDnsHostnameTypeOnLaunch" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.privateDnsHostnameTypeOnLaunch"></a>

```csharp
public string PrivateDnsHostnameTypeOnLaunch { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultSubnetConfig <a name="DefaultSubnetConfig" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DefaultSubnetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AvailabilityZone,
    bool|IResolvable AssignIpv6AddressOnCreation = null,
    string CustomerOwnedIpv4Pool = null,
    bool|IResolvable EnableDns64 = null,
    bool|IResolvable EnableResourceNameDnsAaaaRecordOnLaunch = null,
    bool|IResolvable EnableResourceNameDnsARecordOnLaunch = null,
    bool|IResolvable ForceDestroy = null,
    string Id = null,
    string Ipv6CidrBlock = null,
    bool|IResolvable Ipv6Native = null,
    bool|IResolvable MapCustomerOwnedIpOnLaunch = null,
    bool|IResolvable MapPublicIpOnLaunch = null,
    string PrivateDnsHostnameTypeOnLaunch = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    DefaultSubnetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#availability_zone DefaultSubnet#availability_zone}. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.assignIpv6AddressOnCreation">AssignIpv6AddressOnCreation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#assign_ipv6_address_on_creation DefaultSubnet#assign_ipv6_address_on_creation}. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.customerOwnedIpv4Pool">CustomerOwnedIpv4Pool</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#customer_owned_ipv4_pool DefaultSubnet#customer_owned_ipv4_pool}. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableDns64">EnableDns64</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#enable_dns64 DefaultSubnet#enable_dns64}. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableResourceNameDnsAaaaRecordOnLaunch">EnableResourceNameDnsAaaaRecordOnLaunch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#enable_resource_name_dns_aaaa_record_on_launch DefaultSubnet#enable_resource_name_dns_aaaa_record_on_launch}. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableResourceNameDnsARecordOnLaunch">EnableResourceNameDnsARecordOnLaunch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#enable_resource_name_dns_a_record_on_launch DefaultSubnet#enable_resource_name_dns_a_record_on_launch}. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.forceDestroy">ForceDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#force_destroy DefaultSubnet#force_destroy}. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#id DefaultSubnet#id}. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#ipv6_cidr_block DefaultSubnet#ipv6_cidr_block}. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.ipv6Native">Ipv6Native</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#ipv6_native DefaultSubnet#ipv6_native}. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.mapCustomerOwnedIpOnLaunch">MapCustomerOwnedIpOnLaunch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#map_customer_owned_ip_on_launch DefaultSubnet#map_customer_owned_ip_on_launch}. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.mapPublicIpOnLaunch">MapPublicIpOnLaunch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#map_public_ip_on_launch DefaultSubnet#map_public_ip_on_launch}. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.privateDnsHostnameTypeOnLaunch">PrivateDnsHostnameTypeOnLaunch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#private_dns_hostname_type_on_launch DefaultSubnet#private_dns_hostname_type_on_launch}. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#tags DefaultSubnet#tags}. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#tags_all DefaultSubnet#tags_all}. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeouts">DefaultSubnetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#availability_zone DefaultSubnet#availability_zone}.

---

##### `AssignIpv6AddressOnCreation`<sup>Optional</sup> <a name="AssignIpv6AddressOnCreation" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.assignIpv6AddressOnCreation"></a>

```csharp
public bool|IResolvable AssignIpv6AddressOnCreation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#assign_ipv6_address_on_creation DefaultSubnet#assign_ipv6_address_on_creation}.

---

##### `CustomerOwnedIpv4Pool`<sup>Optional</sup> <a name="CustomerOwnedIpv4Pool" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.customerOwnedIpv4Pool"></a>

```csharp
public string CustomerOwnedIpv4Pool { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#customer_owned_ipv4_pool DefaultSubnet#customer_owned_ipv4_pool}.

---

##### `EnableDns64`<sup>Optional</sup> <a name="EnableDns64" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableDns64"></a>

```csharp
public bool|IResolvable EnableDns64 { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#enable_dns64 DefaultSubnet#enable_dns64}.

---

##### `EnableResourceNameDnsAaaaRecordOnLaunch`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecordOnLaunch" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableResourceNameDnsAaaaRecordOnLaunch"></a>

```csharp
public bool|IResolvable EnableResourceNameDnsAaaaRecordOnLaunch { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#enable_resource_name_dns_aaaa_record_on_launch DefaultSubnet#enable_resource_name_dns_aaaa_record_on_launch}.

---

##### `EnableResourceNameDnsARecordOnLaunch`<sup>Optional</sup> <a name="EnableResourceNameDnsARecordOnLaunch" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.enableResourceNameDnsARecordOnLaunch"></a>

```csharp
public bool|IResolvable EnableResourceNameDnsARecordOnLaunch { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#enable_resource_name_dns_a_record_on_launch DefaultSubnet#enable_resource_name_dns_a_record_on_launch}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.forceDestroy"></a>

```csharp
public bool|IResolvable ForceDestroy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#force_destroy DefaultSubnet#force_destroy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#id DefaultSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv6CidrBlock`<sup>Optional</sup> <a name="Ipv6CidrBlock" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#ipv6_cidr_block DefaultSubnet#ipv6_cidr_block}.

---

##### `Ipv6Native`<sup>Optional</sup> <a name="Ipv6Native" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.ipv6Native"></a>

```csharp
public bool|IResolvable Ipv6Native { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#ipv6_native DefaultSubnet#ipv6_native}.

---

##### `MapCustomerOwnedIpOnLaunch`<sup>Optional</sup> <a name="MapCustomerOwnedIpOnLaunch" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.mapCustomerOwnedIpOnLaunch"></a>

```csharp
public bool|IResolvable MapCustomerOwnedIpOnLaunch { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#map_customer_owned_ip_on_launch DefaultSubnet#map_customer_owned_ip_on_launch}.

---

##### `MapPublicIpOnLaunch`<sup>Optional</sup> <a name="MapPublicIpOnLaunch" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.mapPublicIpOnLaunch"></a>

```csharp
public bool|IResolvable MapPublicIpOnLaunch { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#map_public_ip_on_launch DefaultSubnet#map_public_ip_on_launch}.

---

##### `PrivateDnsHostnameTypeOnLaunch`<sup>Optional</sup> <a name="PrivateDnsHostnameTypeOnLaunch" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.privateDnsHostnameTypeOnLaunch"></a>

```csharp
public string PrivateDnsHostnameTypeOnLaunch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#private_dns_hostname_type_on_launch DefaultSubnet#private_dns_hostname_type_on_launch}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#region DefaultSubnet#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#tags DefaultSubnet#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#tags_all DefaultSubnet#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetConfig.property.timeouts"></a>

```csharp
public DefaultSubnetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeouts">DefaultSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#timeouts DefaultSubnet#timeouts}

---

### DefaultSubnetTimeouts <a name="DefaultSubnetTimeouts" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DefaultSubnetTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#create DefaultSubnet#create}. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#delete DefaultSubnet#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#create DefaultSubnet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/default_subnet#delete DefaultSubnet#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultSubnetTimeoutsOutputReference <a name="DefaultSubnetTimeoutsOutputReference" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DefaultSubnetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeouts">DefaultSubnetTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DefaultSubnetTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.defaultSubnet.DefaultSubnetTimeouts">DefaultSubnetTimeouts</a>

---



