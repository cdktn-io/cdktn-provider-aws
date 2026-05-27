# `ec2TransitGatewayVpcAttachment` Submodule <a name="`ec2TransitGatewayVpcAttachment` Submodule" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayVpcAttachment <a name="Ec2TransitGatewayVpcAttachment" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment aws_ec2_transit_gateway_vpc_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2TransitGatewayVpcAttachment(Construct Scope, string Id, Ec2TransitGatewayVpcAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig">Ec2TransitGatewayVpcAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig">Ec2TransitGatewayVpcAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetApplianceModeSupport">ResetApplianceModeSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetDnsSupport">ResetDnsSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetIpv6Support">ResetIpv6Support</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetSecurityGroupReferencingSupport">ResetSecurityGroupReferencingSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetTransitGatewayDefaultRouteTableAssociation">ResetTransitGatewayDefaultRouteTableAssociation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetTransitGatewayDefaultRouteTablePropagation">ResetTransitGatewayDefaultRouteTablePropagation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetApplianceModeSupport` <a name="ResetApplianceModeSupport" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetApplianceModeSupport"></a>

```csharp
private void ResetApplianceModeSupport()
```

##### `ResetDnsSupport` <a name="ResetDnsSupport" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetDnsSupport"></a>

```csharp
private void ResetDnsSupport()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpv6Support` <a name="ResetIpv6Support" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetIpv6Support"></a>

```csharp
private void ResetIpv6Support()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecurityGroupReferencingSupport` <a name="ResetSecurityGroupReferencingSupport" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetSecurityGroupReferencingSupport"></a>

```csharp
private void ResetSecurityGroupReferencingSupport()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTransitGatewayDefaultRouteTableAssociation` <a name="ResetTransitGatewayDefaultRouteTableAssociation" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetTransitGatewayDefaultRouteTableAssociation"></a>

```csharp
private void ResetTransitGatewayDefaultRouteTableAssociation()
```

##### `ResetTransitGatewayDefaultRouteTablePropagation` <a name="ResetTransitGatewayDefaultRouteTablePropagation" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.resetTransitGatewayDefaultRouteTablePropagation"></a>

```csharp
private void ResetTransitGatewayDefaultRouteTablePropagation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayVpcAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2TransitGatewayVpcAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2TransitGatewayVpcAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2TransitGatewayVpcAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2TransitGatewayVpcAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2TransitGatewayVpcAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TransitGatewayVpcAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TransitGatewayVpcAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayVpcAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.vpcOwnerId">VpcOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.applianceModeSupportInput">ApplianceModeSupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.dnsSupportInput">DnsSupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.ipv6SupportInput">Ipv6SupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.securityGroupReferencingSupportInput">SecurityGroupReferencingSupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayDefaultRouteTableAssociationInput">TransitGatewayDefaultRouteTableAssociationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayDefaultRouteTablePropagationInput">TransitGatewayDefaultRouteTablePropagationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayIdInput">TransitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.applianceModeSupport">ApplianceModeSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.dnsSupport">DnsSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.ipv6Support">Ipv6Support</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.securityGroupReferencingSupport">SecurityGroupReferencingSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayDefaultRouteTableAssociation">TransitGatewayDefaultRouteTableAssociation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayDefaultRouteTablePropagation">TransitGatewayDefaultRouteTablePropagation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `VpcOwnerId`<sup>Required</sup> <a name="VpcOwnerId" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.vpcOwnerId"></a>

```csharp
public string VpcOwnerId { get; }
```

- *Type:* string

---

##### `ApplianceModeSupportInput`<sup>Optional</sup> <a name="ApplianceModeSupportInput" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.applianceModeSupportInput"></a>

```csharp
public string ApplianceModeSupportInput { get; }
```

- *Type:* string

---

##### `DnsSupportInput`<sup>Optional</sup> <a name="DnsSupportInput" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.dnsSupportInput"></a>

```csharp
public string DnsSupportInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Ipv6SupportInput`<sup>Optional</sup> <a name="Ipv6SupportInput" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.ipv6SupportInput"></a>

```csharp
public string Ipv6SupportInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecurityGroupReferencingSupportInput`<sup>Optional</sup> <a name="SecurityGroupReferencingSupportInput" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.securityGroupReferencingSupportInput"></a>

```csharp
public string SecurityGroupReferencingSupportInput { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TransitGatewayDefaultRouteTableAssociationInput`<sup>Optional</sup> <a name="TransitGatewayDefaultRouteTableAssociationInput" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayDefaultRouteTableAssociationInput"></a>

```csharp
public bool|IResolvable TransitGatewayDefaultRouteTableAssociationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TransitGatewayDefaultRouteTablePropagationInput`<sup>Optional</sup> <a name="TransitGatewayDefaultRouteTablePropagationInput" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayDefaultRouteTablePropagationInput"></a>

```csharp
public bool|IResolvable TransitGatewayDefaultRouteTablePropagationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TransitGatewayIdInput`<sup>Optional</sup> <a name="TransitGatewayIdInput" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayIdInput"></a>

```csharp
public string TransitGatewayIdInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `ApplianceModeSupport`<sup>Required</sup> <a name="ApplianceModeSupport" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.applianceModeSupport"></a>

```csharp
public string ApplianceModeSupport { get; }
```

- *Type:* string

---

##### `DnsSupport`<sup>Required</sup> <a name="DnsSupport" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.dnsSupport"></a>

```csharp
public string DnsSupport { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ipv6Support`<sup>Required</sup> <a name="Ipv6Support" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.ipv6Support"></a>

```csharp
public string Ipv6Support { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecurityGroupReferencingSupport`<sup>Required</sup> <a name="SecurityGroupReferencingSupport" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.securityGroupReferencingSupport"></a>

```csharp
public string SecurityGroupReferencingSupport { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TransitGatewayDefaultRouteTableAssociation`<sup>Required</sup> <a name="TransitGatewayDefaultRouteTableAssociation" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayDefaultRouteTableAssociation"></a>

```csharp
public bool|IResolvable TransitGatewayDefaultRouteTableAssociation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TransitGatewayDefaultRouteTablePropagation`<sup>Required</sup> <a name="TransitGatewayDefaultRouteTablePropagation" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayDefaultRouteTablePropagation"></a>

```csharp
public bool|IResolvable TransitGatewayDefaultRouteTablePropagation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayVpcAttachmentConfig <a name="Ec2TransitGatewayVpcAttachmentConfig" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2TransitGatewayVpcAttachmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] SubnetIds,
    string TransitGatewayId,
    string VpcId,
    string ApplianceModeSupport = null,
    string DnsSupport = null,
    string Id = null,
    string Ipv6Support = null,
    string Region = null,
    string SecurityGroupReferencingSupport = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    bool|IResolvable TransitGatewayDefaultRouteTableAssociation = null,
    bool|IResolvable TransitGatewayDefaultRouteTablePropagation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#subnet_ids Ec2TransitGatewayVpcAttachment#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#transit_gateway_id Ec2TransitGatewayVpcAttachment#transit_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#vpc_id Ec2TransitGatewayVpcAttachment#vpc_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.applianceModeSupport">ApplianceModeSupport</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#appliance_mode_support Ec2TransitGatewayVpcAttachment#appliance_mode_support}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.dnsSupport">DnsSupport</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#dns_support Ec2TransitGatewayVpcAttachment#dns_support}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#id Ec2TransitGatewayVpcAttachment#id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.ipv6Support">Ipv6Support</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#ipv6_support Ec2TransitGatewayVpcAttachment#ipv6_support}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.securityGroupReferencingSupport">SecurityGroupReferencingSupport</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#security_group_referencing_support Ec2TransitGatewayVpcAttachment#security_group_referencing_support}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#tags Ec2TransitGatewayVpcAttachment#tags}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#tags_all Ec2TransitGatewayVpcAttachment#tags_all}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.transitGatewayDefaultRouteTableAssociation">TransitGatewayDefaultRouteTableAssociation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#transit_gateway_default_route_table_association Ec2TransitGatewayVpcAttachment#transit_gateway_default_route_table_association}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.transitGatewayDefaultRouteTablePropagation">TransitGatewayDefaultRouteTablePropagation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#transit_gateway_default_route_table_propagation Ec2TransitGatewayVpcAttachment#transit_gateway_default_route_table_propagation}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#subnet_ids Ec2TransitGatewayVpcAttachment#subnet_ids}.

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#transit_gateway_id Ec2TransitGatewayVpcAttachment#transit_gateway_id}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#vpc_id Ec2TransitGatewayVpcAttachment#vpc_id}.

---

##### `ApplianceModeSupport`<sup>Optional</sup> <a name="ApplianceModeSupport" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.applianceModeSupport"></a>

```csharp
public string ApplianceModeSupport { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#appliance_mode_support Ec2TransitGatewayVpcAttachment#appliance_mode_support}.

---

##### `DnsSupport`<sup>Optional</sup> <a name="DnsSupport" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.dnsSupport"></a>

```csharp
public string DnsSupport { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#dns_support Ec2TransitGatewayVpcAttachment#dns_support}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#id Ec2TransitGatewayVpcAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv6Support`<sup>Optional</sup> <a name="Ipv6Support" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.ipv6Support"></a>

```csharp
public string Ipv6Support { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#ipv6_support Ec2TransitGatewayVpcAttachment#ipv6_support}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#region Ec2TransitGatewayVpcAttachment#region}

---

##### `SecurityGroupReferencingSupport`<sup>Optional</sup> <a name="SecurityGroupReferencingSupport" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.securityGroupReferencingSupport"></a>

```csharp
public string SecurityGroupReferencingSupport { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#security_group_referencing_support Ec2TransitGatewayVpcAttachment#security_group_referencing_support}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#tags Ec2TransitGatewayVpcAttachment#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#tags_all Ec2TransitGatewayVpcAttachment#tags_all}.

---

##### `TransitGatewayDefaultRouteTableAssociation`<sup>Optional</sup> <a name="TransitGatewayDefaultRouteTableAssociation" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.transitGatewayDefaultRouteTableAssociation"></a>

```csharp
public bool|IResolvable TransitGatewayDefaultRouteTableAssociation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#transit_gateway_default_route_table_association Ec2TransitGatewayVpcAttachment#transit_gateway_default_route_table_association}.

---

##### `TransitGatewayDefaultRouteTablePropagation`<sup>Optional</sup> <a name="TransitGatewayDefaultRouteTablePropagation" id="@cdktn/provider-aws.ec2TransitGatewayVpcAttachment.Ec2TransitGatewayVpcAttachmentConfig.property.transitGatewayDefaultRouteTablePropagation"></a>

```csharp
public bool|IResolvable TransitGatewayDefaultRouteTablePropagation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/ec2_transit_gateway_vpc_attachment#transit_gateway_default_route_table_propagation Ec2TransitGatewayVpcAttachment#transit_gateway_default_route_table_propagation}.

---



