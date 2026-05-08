# `ec2TransitGatewayMulticastDomain` Submodule <a name="`ec2TransitGatewayMulticastDomain` Submodule" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayMulticastDomain <a name="Ec2TransitGatewayMulticastDomain" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain aws_ec2_transit_gateway_multicast_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2TransitGatewayMulticastDomain(Construct Scope, string Id, Ec2TransitGatewayMulticastDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig">Ec2TransitGatewayMulticastDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig">Ec2TransitGatewayMulticastDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.resetAutoAcceptSharedAssociations">ResetAutoAcceptSharedAssociations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.resetIgmpv2Support">ResetIgmpv2Support</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.resetStaticSourcesSupport">ResetStaticSourcesSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.putTimeouts"></a>

```csharp
private void PutTimeouts(Ec2TransitGatewayMulticastDomainTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeouts">Ec2TransitGatewayMulticastDomainTimeouts</a>

---

##### `ResetAutoAcceptSharedAssociations` <a name="ResetAutoAcceptSharedAssociations" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.resetAutoAcceptSharedAssociations"></a>

```csharp
private void ResetAutoAcceptSharedAssociations()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgmpv2Support` <a name="ResetIgmpv2Support" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.resetIgmpv2Support"></a>

```csharp
private void ResetIgmpv2Support()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStaticSourcesSupport` <a name="ResetStaticSourcesSupport" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.resetStaticSourcesSupport"></a>

```csharp
private void ResetStaticSourcesSupport()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayMulticastDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2TransitGatewayMulticastDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2TransitGatewayMulticastDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2TransitGatewayMulticastDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2TransitGatewayMulticastDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2TransitGatewayMulticastDomain resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TransitGatewayMulticastDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TransitGatewayMulticastDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayMulticastDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference">Ec2TransitGatewayMulticastDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.autoAcceptSharedAssociationsInput">AutoAcceptSharedAssociationsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.igmpv2SupportInput">Igmpv2SupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.staticSourcesSupportInput">StaticSourcesSupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeouts">Ec2TransitGatewayMulticastDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.transitGatewayIdInput">TransitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.autoAcceptSharedAssociations">AutoAcceptSharedAssociations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.igmpv2Support">Igmpv2Support</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.staticSourcesSupport">StaticSourcesSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.timeouts"></a>

```csharp
public Ec2TransitGatewayMulticastDomainTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference">Ec2TransitGatewayMulticastDomainTimeoutsOutputReference</a>

---

##### `AutoAcceptSharedAssociationsInput`<sup>Optional</sup> <a name="AutoAcceptSharedAssociationsInput" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.autoAcceptSharedAssociationsInput"></a>

```csharp
public string AutoAcceptSharedAssociationsInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Igmpv2SupportInput`<sup>Optional</sup> <a name="Igmpv2SupportInput" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.igmpv2SupportInput"></a>

```csharp
public string Igmpv2SupportInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StaticSourcesSupportInput`<sup>Optional</sup> <a name="StaticSourcesSupportInput" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.staticSourcesSupportInput"></a>

```csharp
public string StaticSourcesSupportInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.timeoutsInput"></a>

```csharp
public IResolvable|Ec2TransitGatewayMulticastDomainTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeouts">Ec2TransitGatewayMulticastDomainTimeouts</a>

---

##### `TransitGatewayIdInput`<sup>Optional</sup> <a name="TransitGatewayIdInput" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.transitGatewayIdInput"></a>

```csharp
public string TransitGatewayIdInput { get; }
```

- *Type:* string

---

##### `AutoAcceptSharedAssociations`<sup>Required</sup> <a name="AutoAcceptSharedAssociations" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.autoAcceptSharedAssociations"></a>

```csharp
public string AutoAcceptSharedAssociations { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Igmpv2Support`<sup>Required</sup> <a name="Igmpv2Support" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.igmpv2Support"></a>

```csharp
public string Igmpv2Support { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `StaticSourcesSupport`<sup>Required</sup> <a name="StaticSourcesSupport" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.staticSourcesSupport"></a>

```csharp
public string StaticSourcesSupport { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayMulticastDomainConfig <a name="Ec2TransitGatewayMulticastDomainConfig" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2TransitGatewayMulticastDomainConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string TransitGatewayId,
    string AutoAcceptSharedAssociations = null,
    string Id = null,
    string Igmpv2Support = null,
    string Region = null,
    string StaticSourcesSupport = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    Ec2TransitGatewayMulticastDomainTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain#transit_gateway_id Ec2TransitGatewayMulticastDomain#transit_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.autoAcceptSharedAssociations">AutoAcceptSharedAssociations</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain#auto_accept_shared_associations Ec2TransitGatewayMulticastDomain#auto_accept_shared_associations}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain#id Ec2TransitGatewayMulticastDomain#id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.igmpv2Support">Igmpv2Support</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain#igmpv2_support Ec2TransitGatewayMulticastDomain#igmpv2_support}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.staticSourcesSupport">StaticSourcesSupport</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain#static_sources_support Ec2TransitGatewayMulticastDomain#static_sources_support}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain#tags Ec2TransitGatewayMulticastDomain#tags}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain#tags_all Ec2TransitGatewayMulticastDomain#tags_all}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeouts">Ec2TransitGatewayMulticastDomainTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain#transit_gateway_id Ec2TransitGatewayMulticastDomain#transit_gateway_id}.

---

##### `AutoAcceptSharedAssociations`<sup>Optional</sup> <a name="AutoAcceptSharedAssociations" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.autoAcceptSharedAssociations"></a>

```csharp
public string AutoAcceptSharedAssociations { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain#auto_accept_shared_associations Ec2TransitGatewayMulticastDomain#auto_accept_shared_associations}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain#id Ec2TransitGatewayMulticastDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Igmpv2Support`<sup>Optional</sup> <a name="Igmpv2Support" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.igmpv2Support"></a>

```csharp
public string Igmpv2Support { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain#igmpv2_support Ec2TransitGatewayMulticastDomain#igmpv2_support}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain#region Ec2TransitGatewayMulticastDomain#region}

---

##### `StaticSourcesSupport`<sup>Optional</sup> <a name="StaticSourcesSupport" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.staticSourcesSupport"></a>

```csharp
public string StaticSourcesSupport { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain#static_sources_support Ec2TransitGatewayMulticastDomain#static_sources_support}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain#tags Ec2TransitGatewayMulticastDomain#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain#tags_all Ec2TransitGatewayMulticastDomain#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainConfig.property.timeouts"></a>

```csharp
public Ec2TransitGatewayMulticastDomainTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeouts">Ec2TransitGatewayMulticastDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain#timeouts Ec2TransitGatewayMulticastDomain#timeouts}

---

### Ec2TransitGatewayMulticastDomainTimeouts <a name="Ec2TransitGatewayMulticastDomainTimeouts" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2TransitGatewayMulticastDomainTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain#create Ec2TransitGatewayMulticastDomain#create}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain#delete Ec2TransitGatewayMulticastDomain#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain#create Ec2TransitGatewayMulticastDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain#delete Ec2TransitGatewayMulticastDomain#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayMulticastDomainTimeoutsOutputReference <a name="Ec2TransitGatewayMulticastDomainTimeoutsOutputReference" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2TransitGatewayMulticastDomainTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeouts">Ec2TransitGatewayMulticastDomainTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2TransitGatewayMulticastDomainTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2TransitGatewayMulticastDomain.Ec2TransitGatewayMulticastDomainTimeouts">Ec2TransitGatewayMulticastDomainTimeouts</a>

---



