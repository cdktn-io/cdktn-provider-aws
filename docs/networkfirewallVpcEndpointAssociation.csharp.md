# `networkfirewallVpcEndpointAssociation` Submodule <a name="`networkfirewallVpcEndpointAssociation` Submodule" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallVpcEndpointAssociation <a name="NetworkfirewallVpcEndpointAssociation" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_vpc_endpoint_association aws_networkfirewall_vpc_endpoint_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallVpcEndpointAssociation(Construct Scope, string Id, NetworkfirewallVpcEndpointAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig">NetworkfirewallVpcEndpointAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig">NetworkfirewallVpcEndpointAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putSubnetMapping">PutSubnetMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetSubnetMapping">ResetSubnetMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSubnetMapping` <a name="PutSubnetMapping" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putSubnetMapping"></a>

```csharp
private void PutSubnetMapping(IResolvable|NetworkfirewallVpcEndpointAssociationSubnetMapping[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putSubnetMapping.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkfirewallVpcEndpointAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeouts">NetworkfirewallVpcEndpointAssociationTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSubnetMapping` <a name="ResetSubnetMapping" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetSubnetMapping"></a>

```csharp
private void ResetSubnetMapping()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkfirewallVpcEndpointAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkfirewallVpcEndpointAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkfirewallVpcEndpointAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkfirewallVpcEndpointAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworkfirewallVpcEndpointAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkfirewallVpcEndpointAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkfirewallVpcEndpointAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkfirewallVpcEndpointAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_vpc_endpoint_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkfirewallVpcEndpointAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.subnetMapping">SubnetMapping</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList">NetworkfirewallVpcEndpointAssociationSubnetMappingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference">NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationArn">VpcEndpointAssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationId">VpcEndpointAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationStatus">VpcEndpointAssociationStatus</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList">NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.firewallArnInput">FirewallArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.subnetMappingInput">SubnetMappingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeouts">NetworkfirewallVpcEndpointAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.firewallArn">FirewallArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SubnetMapping`<sup>Required</sup> <a name="SubnetMapping" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.subnetMapping"></a>

```csharp
public NetworkfirewallVpcEndpointAssociationSubnetMappingList SubnetMapping { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList">NetworkfirewallVpcEndpointAssociationSubnetMappingList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.timeouts"></a>

```csharp
public NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference">NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference</a>

---

##### `VpcEndpointAssociationArn`<sup>Required</sup> <a name="VpcEndpointAssociationArn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationArn"></a>

```csharp
public string VpcEndpointAssociationArn { get; }
```

- *Type:* string

---

##### `VpcEndpointAssociationId`<sup>Required</sup> <a name="VpcEndpointAssociationId" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationId"></a>

```csharp
public string VpcEndpointAssociationId { get; }
```

- *Type:* string

---

##### `VpcEndpointAssociationStatus`<sup>Required</sup> <a name="VpcEndpointAssociationStatus" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationStatus"></a>

```csharp
public NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList VpcEndpointAssociationStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList">NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FirewallArnInput`<sup>Optional</sup> <a name="FirewallArnInput" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.firewallArnInput"></a>

```csharp
public string FirewallArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SubnetMappingInput`<sup>Optional</sup> <a name="SubnetMappingInput" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.subnetMappingInput"></a>

```csharp
public IResolvable|NetworkfirewallVpcEndpointAssociationSubnetMapping[] SubnetMappingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkfirewallVpcEndpointAssociationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeouts">NetworkfirewallVpcEndpointAssociationTimeouts</a>

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FirewallArn`<sup>Required</sup> <a name="FirewallArn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.firewallArn"></a>

```csharp
public string FirewallArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallVpcEndpointAssociationConfig <a name="NetworkfirewallVpcEndpointAssociationConfig" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallVpcEndpointAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FirewallArn,
    string VpcId,
    string Description = null,
    string Region = null,
    IResolvable|NetworkfirewallVpcEndpointAssociationSubnetMapping[] SubnetMapping = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    NetworkfirewallVpcEndpointAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.firewallArn">FirewallArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_vpc_endpoint_association#firewall_arn NetworkfirewallVpcEndpointAssociation#firewall_arn}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_vpc_endpoint_association#vpc_id NetworkfirewallVpcEndpointAssociation#vpc_id}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_vpc_endpoint_association#description NetworkfirewallVpcEndpointAssociation#description}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.subnetMapping">SubnetMapping</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a>[]</code> | subnet_mapping block. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_vpc_endpoint_association#tags NetworkfirewallVpcEndpointAssociation#tags}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeouts">NetworkfirewallVpcEndpointAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FirewallArn`<sup>Required</sup> <a name="FirewallArn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.firewallArn"></a>

```csharp
public string FirewallArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_vpc_endpoint_association#firewall_arn NetworkfirewallVpcEndpointAssociation#firewall_arn}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_vpc_endpoint_association#vpc_id NetworkfirewallVpcEndpointAssociation#vpc_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_vpc_endpoint_association#description NetworkfirewallVpcEndpointAssociation#description}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_vpc_endpoint_association#region NetworkfirewallVpcEndpointAssociation#region}

---

##### `SubnetMapping`<sup>Optional</sup> <a name="SubnetMapping" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.subnetMapping"></a>

```csharp
public IResolvable|NetworkfirewallVpcEndpointAssociationSubnetMapping[] SubnetMapping { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a>[]

subnet_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_vpc_endpoint_association#subnet_mapping NetworkfirewallVpcEndpointAssociation#subnet_mapping}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_vpc_endpoint_association#tags NetworkfirewallVpcEndpointAssociation#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.timeouts"></a>

```csharp
public NetworkfirewallVpcEndpointAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeouts">NetworkfirewallVpcEndpointAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_vpc_endpoint_association#timeouts NetworkfirewallVpcEndpointAssociation#timeouts}

---

### NetworkfirewallVpcEndpointAssociationSubnetMapping <a name="NetworkfirewallVpcEndpointAssociationSubnetMapping" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallVpcEndpointAssociationSubnetMapping {
    string SubnetId,
    string IpAddressType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_vpc_endpoint_association#subnet_id NetworkfirewallVpcEndpointAssociation#subnet_id}. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_vpc_endpoint_association#ip_address_type NetworkfirewallVpcEndpointAssociation#ip_address_type}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_vpc_endpoint_association#subnet_id NetworkfirewallVpcEndpointAssociation#subnet_id}.

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_vpc_endpoint_association#ip_address_type NetworkfirewallVpcEndpointAssociation#ip_address_type}.

---

### NetworkfirewallVpcEndpointAssociationTimeouts <a name="NetworkfirewallVpcEndpointAssociationTimeouts" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallVpcEndpointAssociationTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_vpc_endpoint_association#create NetworkfirewallVpcEndpointAssociation#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/networkfirewall_vpc_endpoint_association#delete NetworkfirewallVpcEndpointAssociation#delete}

---

### NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatus <a name="NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatus" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatus {

};
```


### NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncState <a name="NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncState" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncState.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncState {

};
```


### NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachment <a name="NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachment" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachment {

};
```


## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallVpcEndpointAssociationSubnetMappingList <a name="NetworkfirewallVpcEndpointAssociationSubnetMappingList" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallVpcEndpointAssociationSubnetMappingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.get"></a>

```csharp
private NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingList.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallVpcEndpointAssociationSubnetMapping[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a>[]

---


### NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference <a name="NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallVpcEndpointAssociationSubnetMapping InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a>

---


### NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference <a name="NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeouts">NetworkfirewallVpcEndpointAssociationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkfirewallVpcEndpointAssociationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTimeouts">NetworkfirewallVpcEndpointAssociationTimeouts</a>

---


### NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList <a name="NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.get"></a>

```csharp
private NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference <a name="NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachment">NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentOutputReference.property.internalValue"></a>

```csharp
public NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachment">NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachment</a>

---


### NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList <a name="NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.get"></a>

```csharp
private NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference <a name="NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.property.attachment">Attachment</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList">NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncState">NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attachment`<sup>Required</sup> <a name="Attachment" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.property.attachment"></a>

```csharp
public NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList Attachment { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList">NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateAttachmentList</a>

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateOutputReference.property.internalValue"></a>

```csharp
public NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncState InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncState">NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncState</a>

---


### NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList <a name="NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.get"></a>

```csharp
private NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference <a name="NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.property.associationSyncState">AssociationSyncState</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList">NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatus">NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssociationSyncState`<sup>Required</sup> <a name="AssociationSyncState" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.property.associationSyncState"></a>

```csharp
public NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList AssociationSyncState { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList">NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusAssociationSyncStateList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatusOutputReference.property.internalValue"></a>

```csharp
public NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatus">NetworkfirewallVpcEndpointAssociationVpcEndpointAssociationStatus</a>

---



