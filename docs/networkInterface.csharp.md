# `networkInterface` Submodule <a name="`networkInterface` Submodule" id="@cdktn/provider-aws.networkInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkInterface <a name="NetworkInterface" id="@cdktn/provider-aws.networkInterface.NetworkInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface aws_network_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkInterface(Construct Scope, string Id, NetworkInterfaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig">NetworkInterfaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.networkInterface.NetworkInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig">NetworkInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.putAttachment">PutAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.putEnaSrdSpecification">PutEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetAttachment">ResetAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetEnablePrimaryIpv6">ResetEnablePrimaryIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetEnaSrdSpecification">ResetEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetInterfaceType">ResetInterfaceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv4PrefixCount">ResetIpv4PrefixCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv4Prefixes">ResetIpv4Prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressCount">ResetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6Addresses">ResetIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressList">ResetIpv6AddressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressListEnabled">ResetIpv6AddressListEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6PrefixCount">ResetIpv6PrefixCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6Prefixes">ResetIpv6Prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetPrivateIpList">ResetPrivateIpList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetPrivateIpListEnabled">ResetPrivateIpListEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetPrivateIps">ResetPrivateIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetPrivateIpsCount">ResetPrivateIpsCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetSourceDestCheck">ResetSourceDestCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkInterface.NetworkInterface.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.networkInterface.NetworkInterface.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.networkInterface.NetworkInterface.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.networkInterface.NetworkInterface.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.networkInterface.NetworkInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkInterface.NetworkInterface.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.networkInterface.NetworkInterface.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.networkInterface.NetworkInterface.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.networkInterface.NetworkInterface.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.networkInterface.NetworkInterface.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networkInterface.NetworkInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.networkInterface.NetworkInterface.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.networkInterface.NetworkInterface.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkInterface.NetworkInterface.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkInterface.NetworkInterface.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkInterface.NetworkInterface.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.networkInterface.NetworkInterface.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networkInterface.NetworkInterface.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.networkInterface.NetworkInterface.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkInterface.NetworkInterface.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttachment` <a name="PutAttachment" id="@cdktn/provider-aws.networkInterface.NetworkInterface.putAttachment"></a>

```csharp
private void PutAttachment(IResolvable|NetworkInterfaceAttachment[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkInterface.NetworkInterface.putAttachment.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>[]

---

##### `PutEnaSrdSpecification` <a name="PutEnaSrdSpecification" id="@cdktn/provider-aws.networkInterface.NetworkInterface.putEnaSrdSpecification"></a>

```csharp
private void PutEnaSrdSpecification(NetworkInterfaceEnaSrdSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkInterface.NetworkInterface.putEnaSrdSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification">NetworkInterfaceEnaSrdSpecification</a>

---

##### `ResetAttachment` <a name="ResetAttachment" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetAttachment"></a>

```csharp
private void ResetAttachment()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnablePrimaryIpv6` <a name="ResetEnablePrimaryIpv6" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetEnablePrimaryIpv6"></a>

```csharp
private void ResetEnablePrimaryIpv6()
```

##### `ResetEnaSrdSpecification` <a name="ResetEnaSrdSpecification" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetEnaSrdSpecification"></a>

```csharp
private void ResetEnaSrdSpecification()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInterfaceType` <a name="ResetInterfaceType" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetInterfaceType"></a>

```csharp
private void ResetInterfaceType()
```

##### `ResetIpv4PrefixCount` <a name="ResetIpv4PrefixCount" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv4PrefixCount"></a>

```csharp
private void ResetIpv4PrefixCount()
```

##### `ResetIpv4Prefixes` <a name="ResetIpv4Prefixes" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv4Prefixes"></a>

```csharp
private void ResetIpv4Prefixes()
```

##### `ResetIpv6AddressCount` <a name="ResetIpv6AddressCount" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressCount"></a>

```csharp
private void ResetIpv6AddressCount()
```

##### `ResetIpv6Addresses` <a name="ResetIpv6Addresses" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6Addresses"></a>

```csharp
private void ResetIpv6Addresses()
```

##### `ResetIpv6AddressList` <a name="ResetIpv6AddressList" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressList"></a>

```csharp
private void ResetIpv6AddressList()
```

##### `ResetIpv6AddressListEnabled` <a name="ResetIpv6AddressListEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6AddressListEnabled"></a>

```csharp
private void ResetIpv6AddressListEnabled()
```

##### `ResetIpv6PrefixCount` <a name="ResetIpv6PrefixCount" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6PrefixCount"></a>

```csharp
private void ResetIpv6PrefixCount()
```

##### `ResetIpv6Prefixes` <a name="ResetIpv6Prefixes" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetIpv6Prefixes"></a>

```csharp
private void ResetIpv6Prefixes()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetPrivateIp"></a>

```csharp
private void ResetPrivateIp()
```

##### `ResetPrivateIpList` <a name="ResetPrivateIpList" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetPrivateIpList"></a>

```csharp
private void ResetPrivateIpList()
```

##### `ResetPrivateIpListEnabled` <a name="ResetPrivateIpListEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetPrivateIpListEnabled"></a>

```csharp
private void ResetPrivateIpListEnabled()
```

##### `ResetPrivateIps` <a name="ResetPrivateIps" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetPrivateIps"></a>

```csharp
private void ResetPrivateIps()
```

##### `ResetPrivateIpsCount` <a name="ResetPrivateIpsCount" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetPrivateIpsCount"></a>

```csharp
private void ResetPrivateIpsCount()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetSourceDestCheck` <a name="ResetSourceDestCheck" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetSourceDestCheck"></a>

```csharp
private void ResetSourceDestCheck()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.networkInterface.NetworkInterface.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkInterface resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.networkInterface.NetworkInterface.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkInterface.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkInterface.NetworkInterface.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.networkInterface.NetworkInterface.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkInterface.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkInterface.NetworkInterface.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.networkInterface.NetworkInterface.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkInterface.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkInterface.NetworkInterface.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.networkInterface.NetworkInterface.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkInterface.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkInterface resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networkInterface.NetworkInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkInterface to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkInterface.NetworkInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.attachment">Attachment</a></code> | <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList">NetworkInterfaceAttachmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.enaSrdSpecification">EnaSrdSpecification</a></code> | <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference">NetworkInterfaceEnaSrdSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.macAddress">MacAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.outpostArn">OutpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateDnsName">PrivateDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.attachmentInput">AttachmentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.enablePrimaryIpv6Input">EnablePrimaryIpv6Input</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.enaSrdSpecificationInput">EnaSrdSpecificationInput</a></code> | <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification">NetworkInterfaceEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.interfaceTypeInput">InterfaceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixCountInput">Ipv4PrefixCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixesInput">Ipv4PrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressCountInput">Ipv6AddressCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressesInput">Ipv6AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListEnabledInput">Ipv6AddressListEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListInput">Ipv6AddressListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixCountInput">Ipv6PrefixCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixesInput">Ipv6PrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpInput">PrivateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpListEnabledInput">PrivateIpListEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpListInput">PrivateIpListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpsCountInput">PrivateIpsCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpsInput">PrivateIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.sourceDestCheckInput">SourceDestCheckInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.enablePrimaryIpv6">EnablePrimaryIpv6</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.interfaceType">InterfaceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixCount">Ipv4PrefixCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv4Prefixes">Ipv4Prefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressList">Ipv6AddressList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListEnabled">Ipv6AddressListEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixCount">Ipv6PrefixCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6Prefixes">Ipv6Prefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpList">PrivateIpList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpListEnabled">PrivateIpListEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIps">PrivateIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpsCount">PrivateIpsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.sourceDestCheck">SourceDestCheck</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Attachment`<sup>Required</sup> <a name="Attachment" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.attachment"></a>

```csharp
public NetworkInterfaceAttachmentList Attachment { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList">NetworkInterfaceAttachmentList</a>

---

##### `EnaSrdSpecification`<sup>Required</sup> <a name="EnaSrdSpecification" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.enaSrdSpecification"></a>

```csharp
public NetworkInterfaceEnaSrdSpecificationOutputReference EnaSrdSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference">NetworkInterfaceEnaSrdSpecificationOutputReference</a>

---

##### `MacAddress`<sup>Required</sup> <a name="MacAddress" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.macAddress"></a>

```csharp
public string MacAddress { get; }
```

- *Type:* string

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.outpostArn"></a>

```csharp
public string OutpostArn { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `PrivateDnsName`<sup>Required</sup> <a name="PrivateDnsName" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateDnsName"></a>

```csharp
public string PrivateDnsName { get; }
```

- *Type:* string

---

##### `AttachmentInput`<sup>Optional</sup> <a name="AttachmentInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.attachmentInput"></a>

```csharp
public IResolvable|NetworkInterfaceAttachment[] AttachmentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnablePrimaryIpv6Input`<sup>Optional</sup> <a name="EnablePrimaryIpv6Input" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.enablePrimaryIpv6Input"></a>

```csharp
public bool|IResolvable EnablePrimaryIpv6Input { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnaSrdSpecificationInput`<sup>Optional</sup> <a name="EnaSrdSpecificationInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.enaSrdSpecificationInput"></a>

```csharp
public NetworkInterfaceEnaSrdSpecification EnaSrdSpecificationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification">NetworkInterfaceEnaSrdSpecification</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InterfaceTypeInput`<sup>Optional</sup> <a name="InterfaceTypeInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.interfaceTypeInput"></a>

```csharp
public string InterfaceTypeInput { get; }
```

- *Type:* string

---

##### `Ipv4PrefixCountInput`<sup>Optional</sup> <a name="Ipv4PrefixCountInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixCountInput"></a>

```csharp
public double Ipv4PrefixCountInput { get; }
```

- *Type:* double

---

##### `Ipv4PrefixesInput`<sup>Optional</sup> <a name="Ipv4PrefixesInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixesInput"></a>

```csharp
public string[] Ipv4PrefixesInput { get; }
```

- *Type:* string[]

---

##### `Ipv6AddressCountInput`<sup>Optional</sup> <a name="Ipv6AddressCountInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressCountInput"></a>

```csharp
public double Ipv6AddressCountInput { get; }
```

- *Type:* double

---

##### `Ipv6AddressesInput`<sup>Optional</sup> <a name="Ipv6AddressesInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressesInput"></a>

```csharp
public string[] Ipv6AddressesInput { get; }
```

- *Type:* string[]

---

##### `Ipv6AddressListEnabledInput`<sup>Optional</sup> <a name="Ipv6AddressListEnabledInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListEnabledInput"></a>

```csharp
public bool|IResolvable Ipv6AddressListEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Ipv6AddressListInput`<sup>Optional</sup> <a name="Ipv6AddressListInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListInput"></a>

```csharp
public string[] Ipv6AddressListInput { get; }
```

- *Type:* string[]

---

##### `Ipv6PrefixCountInput`<sup>Optional</sup> <a name="Ipv6PrefixCountInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixCountInput"></a>

```csharp
public double Ipv6PrefixCountInput { get; }
```

- *Type:* double

---

##### `Ipv6PrefixesInput`<sup>Optional</sup> <a name="Ipv6PrefixesInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixesInput"></a>

```csharp
public string[] Ipv6PrefixesInput { get; }
```

- *Type:* string[]

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpInput"></a>

```csharp
public string PrivateIpInput { get; }
```

- *Type:* string

---

##### `PrivateIpListEnabledInput`<sup>Optional</sup> <a name="PrivateIpListEnabledInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpListEnabledInput"></a>

```csharp
public bool|IResolvable PrivateIpListEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrivateIpListInput`<sup>Optional</sup> <a name="PrivateIpListInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpListInput"></a>

```csharp
public string[] PrivateIpListInput { get; }
```

- *Type:* string[]

---

##### `PrivateIpsCountInput`<sup>Optional</sup> <a name="PrivateIpsCountInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpsCountInput"></a>

```csharp
public double PrivateIpsCountInput { get; }
```

- *Type:* double

---

##### `PrivateIpsInput`<sup>Optional</sup> <a name="PrivateIpsInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpsInput"></a>

```csharp
public string[] PrivateIpsInput { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SourceDestCheckInput`<sup>Optional</sup> <a name="SourceDestCheckInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.sourceDestCheckInput"></a>

```csharp
public bool|IResolvable SourceDestCheckInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnablePrimaryIpv6`<sup>Required</sup> <a name="EnablePrimaryIpv6" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.enablePrimaryIpv6"></a>

```csharp
public bool|IResolvable EnablePrimaryIpv6 { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InterfaceType`<sup>Required</sup> <a name="InterfaceType" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.interfaceType"></a>

```csharp
public string InterfaceType { get; }
```

- *Type:* string

---

##### `Ipv4PrefixCount`<sup>Required</sup> <a name="Ipv4PrefixCount" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv4PrefixCount"></a>

```csharp
public double Ipv4PrefixCount { get; }
```

- *Type:* double

---

##### `Ipv4Prefixes`<sup>Required</sup> <a name="Ipv4Prefixes" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv4Prefixes"></a>

```csharp
public string[] Ipv4Prefixes { get; }
```

- *Type:* string[]

---

##### `Ipv6AddressCount`<sup>Required</sup> <a name="Ipv6AddressCount" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressCount"></a>

```csharp
public double Ipv6AddressCount { get; }
```

- *Type:* double

---

##### `Ipv6Addresses`<sup>Required</sup> <a name="Ipv6Addresses" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6Addresses"></a>

```csharp
public string[] Ipv6Addresses { get; }
```

- *Type:* string[]

---

##### `Ipv6AddressList`<sup>Required</sup> <a name="Ipv6AddressList" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressList"></a>

```csharp
public string[] Ipv6AddressList { get; }
```

- *Type:* string[]

---

##### `Ipv6AddressListEnabled`<sup>Required</sup> <a name="Ipv6AddressListEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6AddressListEnabled"></a>

```csharp
public bool|IResolvable Ipv6AddressListEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Ipv6PrefixCount`<sup>Required</sup> <a name="Ipv6PrefixCount" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6PrefixCount"></a>

```csharp
public double Ipv6PrefixCount { get; }
```

- *Type:* double

---

##### `Ipv6Prefixes`<sup>Required</sup> <a name="Ipv6Prefixes" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.ipv6Prefixes"></a>

```csharp
public string[] Ipv6Prefixes { get; }
```

- *Type:* string[]

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `PrivateIpList`<sup>Required</sup> <a name="PrivateIpList" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpList"></a>

```csharp
public string[] PrivateIpList { get; }
```

- *Type:* string[]

---

##### `PrivateIpListEnabled`<sup>Required</sup> <a name="PrivateIpListEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpListEnabled"></a>

```csharp
public bool|IResolvable PrivateIpListEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrivateIps`<sup>Required</sup> <a name="PrivateIps" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIps"></a>

```csharp
public string[] PrivateIps { get; }
```

- *Type:* string[]

---

##### `PrivateIpsCount`<sup>Required</sup> <a name="PrivateIpsCount" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.privateIpsCount"></a>

```csharp
public double PrivateIpsCount { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `SourceDestCheck`<sup>Required</sup> <a name="SourceDestCheck" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.sourceDestCheck"></a>

```csharp
public bool|IResolvable SourceDestCheck { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterface.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.networkInterface.NetworkInterface.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkInterfaceAttachment <a name="NetworkInterfaceAttachment" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkInterfaceAttachment {
    double DeviceIndex,
    string Instance,
    double NetworkCardIndex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment.property.deviceIndex">DeviceIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#device_index NetworkInterface#device_index}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment.property.instance">Instance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#instance NetworkInterface#instance}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment.property.networkCardIndex">NetworkCardIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#network_card_index NetworkInterface#network_card_index}. |

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment.property.deviceIndex"></a>

```csharp
public double DeviceIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#device_index NetworkInterface#device_index}.

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#instance NetworkInterface#instance}.

---

##### `NetworkCardIndex`<sup>Optional</sup> <a name="NetworkCardIndex" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment.property.networkCardIndex"></a>

```csharp
public double NetworkCardIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#network_card_index NetworkInterface#network_card_index}.

---

### NetworkInterfaceConfig <a name="NetworkInterfaceConfig" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkInterfaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SubnetId,
    IResolvable|NetworkInterfaceAttachment[] Attachment = null,
    string Description = null,
    bool|IResolvable EnablePrimaryIpv6 = null,
    NetworkInterfaceEnaSrdSpecification EnaSrdSpecification = null,
    string Id = null,
    string InterfaceType = null,
    double Ipv4PrefixCount = null,
    string[] Ipv4Prefixes = null,
    double Ipv6AddressCount = null,
    string[] Ipv6Addresses = null,
    string[] Ipv6AddressList = null,
    bool|IResolvable Ipv6AddressListEnabled = null,
    double Ipv6PrefixCount = null,
    string[] Ipv6Prefixes = null,
    string PrivateIp = null,
    string[] PrivateIpList = null,
    bool|IResolvable PrivateIpListEnabled = null,
    string[] PrivateIps = null,
    double PrivateIpsCount = null,
    string Region = null,
    string[] SecurityGroups = null,
    bool|IResolvable SourceDestCheck = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#subnet_id NetworkInterface#subnet_id}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.attachment">Attachment</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>[]</code> | attachment block. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#description NetworkInterface#description}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.enablePrimaryIpv6">EnablePrimaryIpv6</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#enable_primary_ipv6 NetworkInterface#enable_primary_ipv6}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.enaSrdSpecification">EnaSrdSpecification</a></code> | <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification">NetworkInterfaceEnaSrdSpecification</a></code> | ena_srd_specification block. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#id NetworkInterface#id}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.interfaceType">InterfaceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#interface_type NetworkInterface#interface_type}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv4PrefixCount">Ipv4PrefixCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv4_prefix_count NetworkInterface#ipv4_prefix_count}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv4Prefixes">Ipv4Prefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv4_prefixes NetworkInterface#ipv4_prefixes}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_address_count NetworkInterface#ipv6_address_count}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_addresses NetworkInterface#ipv6_addresses}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressList">Ipv6AddressList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_address_list NetworkInterface#ipv6_address_list}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressListEnabled">Ipv6AddressListEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_address_list_enabled NetworkInterface#ipv6_address_list_enabled}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6PrefixCount">Ipv6PrefixCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_prefix_count NetworkInterface#ipv6_prefix_count}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6Prefixes">Ipv6Prefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_prefixes NetworkInterface#ipv6_prefixes}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIp">PrivateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ip NetworkInterface#private_ip}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpList">PrivateIpList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ip_list NetworkInterface#private_ip_list}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpListEnabled">PrivateIpListEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ip_list_enabled NetworkInterface#private_ip_list_enabled}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIps">PrivateIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ips NetworkInterface#private_ips}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpsCount">PrivateIpsCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ips_count NetworkInterface#private_ips_count}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#security_groups NetworkInterface#security_groups}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.sourceDestCheck">SourceDestCheck</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#source_dest_check NetworkInterface#source_dest_check}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#tags NetworkInterface#tags}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#tags_all NetworkInterface#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#subnet_id NetworkInterface#subnet_id}.

---

##### `Attachment`<sup>Optional</sup> <a name="Attachment" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.attachment"></a>

```csharp
public IResolvable|NetworkInterfaceAttachment[] Attachment { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>[]

attachment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#attachment NetworkInterface#attachment}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#description NetworkInterface#description}.

---

##### `EnablePrimaryIpv6`<sup>Optional</sup> <a name="EnablePrimaryIpv6" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.enablePrimaryIpv6"></a>

```csharp
public bool|IResolvable EnablePrimaryIpv6 { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#enable_primary_ipv6 NetworkInterface#enable_primary_ipv6}.

---

##### `EnaSrdSpecification`<sup>Optional</sup> <a name="EnaSrdSpecification" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.enaSrdSpecification"></a>

```csharp
public NetworkInterfaceEnaSrdSpecification EnaSrdSpecification { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification">NetworkInterfaceEnaSrdSpecification</a>

ena_srd_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ena_srd_specification NetworkInterface#ena_srd_specification}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#id NetworkInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InterfaceType`<sup>Optional</sup> <a name="InterfaceType" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.interfaceType"></a>

```csharp
public string InterfaceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#interface_type NetworkInterface#interface_type}.

---

##### `Ipv4PrefixCount`<sup>Optional</sup> <a name="Ipv4PrefixCount" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv4PrefixCount"></a>

```csharp
public double Ipv4PrefixCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv4_prefix_count NetworkInterface#ipv4_prefix_count}.

---

##### `Ipv4Prefixes`<sup>Optional</sup> <a name="Ipv4Prefixes" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv4Prefixes"></a>

```csharp
public string[] Ipv4Prefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv4_prefixes NetworkInterface#ipv4_prefixes}.

---

##### `Ipv6AddressCount`<sup>Optional</sup> <a name="Ipv6AddressCount" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressCount"></a>

```csharp
public double Ipv6AddressCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_address_count NetworkInterface#ipv6_address_count}.

---

##### `Ipv6Addresses`<sup>Optional</sup> <a name="Ipv6Addresses" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6Addresses"></a>

```csharp
public string[] Ipv6Addresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_addresses NetworkInterface#ipv6_addresses}.

---

##### `Ipv6AddressList`<sup>Optional</sup> <a name="Ipv6AddressList" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressList"></a>

```csharp
public string[] Ipv6AddressList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_address_list NetworkInterface#ipv6_address_list}.

---

##### `Ipv6AddressListEnabled`<sup>Optional</sup> <a name="Ipv6AddressListEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6AddressListEnabled"></a>

```csharp
public bool|IResolvable Ipv6AddressListEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_address_list_enabled NetworkInterface#ipv6_address_list_enabled}.

---

##### `Ipv6PrefixCount`<sup>Optional</sup> <a name="Ipv6PrefixCount" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6PrefixCount"></a>

```csharp
public double Ipv6PrefixCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_prefix_count NetworkInterface#ipv6_prefix_count}.

---

##### `Ipv6Prefixes`<sup>Optional</sup> <a name="Ipv6Prefixes" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.ipv6Prefixes"></a>

```csharp
public string[] Ipv6Prefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ipv6_prefixes NetworkInterface#ipv6_prefixes}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIp"></a>

```csharp
public string PrivateIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ip NetworkInterface#private_ip}.

---

##### `PrivateIpList`<sup>Optional</sup> <a name="PrivateIpList" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpList"></a>

```csharp
public string[] PrivateIpList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ip_list NetworkInterface#private_ip_list}.

---

##### `PrivateIpListEnabled`<sup>Optional</sup> <a name="PrivateIpListEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpListEnabled"></a>

```csharp
public bool|IResolvable PrivateIpListEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ip_list_enabled NetworkInterface#private_ip_list_enabled}.

---

##### `PrivateIps`<sup>Optional</sup> <a name="PrivateIps" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIps"></a>

```csharp
public string[] PrivateIps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ips NetworkInterface#private_ips}.

---

##### `PrivateIpsCount`<sup>Optional</sup> <a name="PrivateIpsCount" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.privateIpsCount"></a>

```csharp
public double PrivateIpsCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#private_ips_count NetworkInterface#private_ips_count}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#region NetworkInterface#region}

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#security_groups NetworkInterface#security_groups}.

---

##### `SourceDestCheck`<sup>Optional</sup> <a name="SourceDestCheck" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.sourceDestCheck"></a>

```csharp
public bool|IResolvable SourceDestCheck { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#source_dest_check NetworkInterface#source_dest_check}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#tags NetworkInterface#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#tags_all NetworkInterface#tags_all}.

---

### NetworkInterfaceEnaSrdSpecification <a name="NetworkInterfaceEnaSrdSpecification" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkInterfaceEnaSrdSpecification {
    bool|IResolvable EnaSrdEnabled = null,
    NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification EnaSrdUdpSpecification = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification.property.enaSrdEnabled">EnaSrdEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ena_srd_enabled NetworkInterface#ena_srd_enabled}. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification.property.enaSrdUdpSpecification">EnaSrdUdpSpecification</a></code> | <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification">NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | ena_srd_udp_specification block. |

---

##### `EnaSrdEnabled`<sup>Optional</sup> <a name="EnaSrdEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification.property.enaSrdEnabled"></a>

```csharp
public bool|IResolvable EnaSrdEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ena_srd_enabled NetworkInterface#ena_srd_enabled}.

---

##### `EnaSrdUdpSpecification`<sup>Optional</sup> <a name="EnaSrdUdpSpecification" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification.property.enaSrdUdpSpecification"></a>

```csharp
public NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification EnaSrdUdpSpecification { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification">NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification</a>

ena_srd_udp_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ena_srd_udp_specification NetworkInterface#ena_srd_udp_specification}

---

### NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification <a name="NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification {
    bool|IResolvable EnaSrdUdpEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification.property.enaSrdUdpEnabled">EnaSrdUdpEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ena_srd_udp_enabled NetworkInterface#ena_srd_udp_enabled}. |

---

##### `EnaSrdUdpEnabled`<sup>Optional</sup> <a name="EnaSrdUdpEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification.property.enaSrdUdpEnabled"></a>

```csharp
public bool|IResolvable EnaSrdUdpEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/network_interface#ena_srd_udp_enabled NetworkInterface#ena_srd_udp_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkInterfaceAttachmentList <a name="NetworkInterfaceAttachmentList" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkInterfaceAttachmentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.get"></a>

```csharp
private NetworkInterfaceAttachmentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentList.property.internalValue"></a>

```csharp
public IResolvable|NetworkInterfaceAttachment[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>[]

---


### NetworkInterfaceAttachmentOutputReference <a name="NetworkInterfaceAttachmentOutputReference" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkInterfaceAttachmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.resetNetworkCardIndex">ResetNetworkCardIndex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetworkCardIndex` <a name="ResetNetworkCardIndex" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.resetNetworkCardIndex"></a>

```csharp
private void ResetNetworkCardIndex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.attachmentId">AttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.deviceIndexInput">DeviceIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.networkCardIndexInput">NetworkCardIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.deviceIndex">DeviceIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.networkCardIndex">NetworkCardIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.attachmentId"></a>

```csharp
public string AttachmentId { get; }
```

- *Type:* string

---

##### `DeviceIndexInput`<sup>Optional</sup> <a name="DeviceIndexInput" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.deviceIndexInput"></a>

```csharp
public double DeviceIndexInput { get; }
```

- *Type:* double

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `NetworkCardIndexInput`<sup>Optional</sup> <a name="NetworkCardIndexInput" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.networkCardIndexInput"></a>

```csharp
public double NetworkCardIndexInput { get; }
```

- *Type:* double

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.deviceIndex"></a>

```csharp
public double DeviceIndex { get; }
```

- *Type:* double

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `NetworkCardIndex`<sup>Required</sup> <a name="NetworkCardIndex" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.networkCardIndex"></a>

```csharp
public double NetworkCardIndex { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachmentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkInterfaceAttachment InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceAttachment">NetworkInterfaceAttachment</a>

---


### NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference <a name="NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resetEnaSrdUdpEnabled">ResetEnaSrdUdpEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnaSrdUdpEnabled` <a name="ResetEnaSrdUdpEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resetEnaSrdUdpEnabled"></a>

```csharp
private void ResetEnaSrdUdpEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabledInput">EnaSrdUdpEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled">EnaSrdUdpEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification">NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnaSrdUdpEnabledInput`<sup>Optional</sup> <a name="EnaSrdUdpEnabledInput" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabledInput"></a>

```csharp
public bool|IResolvable EnaSrdUdpEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnaSrdUdpEnabled`<sup>Required</sup> <a name="EnaSrdUdpEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled"></a>

```csharp
public bool|IResolvable EnaSrdUdpEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue"></a>

```csharp
public NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification">NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification</a>

---


### NetworkInterfaceEnaSrdSpecificationOutputReference <a name="NetworkInterfaceEnaSrdSpecificationOutputReference" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkInterfaceEnaSrdSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification">PutEnaSrdUdpSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.resetEnaSrdEnabled">ResetEnaSrdEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.resetEnaSrdUdpSpecification">ResetEnaSrdUdpSpecification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnaSrdUdpSpecification` <a name="PutEnaSrdUdpSpecification" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification"></a>

```csharp
private void PutEnaSrdUdpSpecification(NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification">NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification</a>

---

##### `ResetEnaSrdEnabled` <a name="ResetEnaSrdEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.resetEnaSrdEnabled"></a>

```csharp
private void ResetEnaSrdEnabled()
```

##### `ResetEnaSrdUdpSpecification` <a name="ResetEnaSrdUdpSpecification" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.resetEnaSrdUdpSpecification"></a>

```csharp
private void ResetEnaSrdUdpSpecification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification">EnaSrdUdpSpecification</a></code> | <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.enaSrdEnabledInput">EnaSrdEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecificationInput">EnaSrdUdpSpecificationInput</a></code> | <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification">NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.enaSrdEnabled">EnaSrdEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification">NetworkInterfaceEnaSrdSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnaSrdUdpSpecification`<sup>Required</sup> <a name="EnaSrdUdpSpecification" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification"></a>

```csharp
public NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference EnaSrdUdpSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a>

---

##### `EnaSrdEnabledInput`<sup>Optional</sup> <a name="EnaSrdEnabledInput" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.enaSrdEnabledInput"></a>

```csharp
public bool|IResolvable EnaSrdEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnaSrdUdpSpecificationInput`<sup>Optional</sup> <a name="EnaSrdUdpSpecificationInput" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecificationInput"></a>

```csharp
public NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification EnaSrdUdpSpecificationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification">NetworkInterfaceEnaSrdSpecificationEnaSrdUdpSpecification</a>

---

##### `EnaSrdEnabled`<sup>Required</sup> <a name="EnaSrdEnabled" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.enaSrdEnabled"></a>

```csharp
public bool|IResolvable EnaSrdEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecificationOutputReference.property.internalValue"></a>

```csharp
public NetworkInterfaceEnaSrdSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkInterface.NetworkInterfaceEnaSrdSpecification">NetworkInterfaceEnaSrdSpecification</a>

---



