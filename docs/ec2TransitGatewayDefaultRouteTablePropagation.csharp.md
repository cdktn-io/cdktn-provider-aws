# `ec2TransitGatewayDefaultRouteTablePropagation` Submodule <a name="`ec2TransitGatewayDefaultRouteTablePropagation` Submodule" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayDefaultRouteTablePropagation <a name="Ec2TransitGatewayDefaultRouteTablePropagation" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_default_route_table_propagation aws_ec2_transit_gateway_default_route_table_propagation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2TransitGatewayDefaultRouteTablePropagation(Construct Scope, string Id, Ec2TransitGatewayDefaultRouteTablePropagationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig">Ec2TransitGatewayDefaultRouteTablePropagationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig">Ec2TransitGatewayDefaultRouteTablePropagationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.putTimeouts"></a>

```csharp
private void PutTimeouts(Ec2TransitGatewayDefaultRouteTablePropagationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts">Ec2TransitGatewayDefaultRouteTablePropagationTimeouts</a>

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayDefaultRouteTablePropagation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2TransitGatewayDefaultRouteTablePropagation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2TransitGatewayDefaultRouteTablePropagation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2TransitGatewayDefaultRouteTablePropagation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Ec2TransitGatewayDefaultRouteTablePropagation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2TransitGatewayDefaultRouteTablePropagation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TransitGatewayDefaultRouteTablePropagation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TransitGatewayDefaultRouteTablePropagation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayDefaultRouteTablePropagation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.originalDefaultRouteTableId">OriginalDefaultRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference">Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts">Ec2TransitGatewayDefaultRouteTablePropagationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.transitGatewayIdInput">TransitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.transitGatewayRouteTableIdInput">TransitGatewayRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.transitGatewayRouteTableId">TransitGatewayRouteTableId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OriginalDefaultRouteTableId`<sup>Required</sup> <a name="OriginalDefaultRouteTableId" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.originalDefaultRouteTableId"></a>

```csharp
public string OriginalDefaultRouteTableId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.timeouts"></a>

```csharp
public Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference">Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.timeoutsInput"></a>

```csharp
public IResolvable|Ec2TransitGatewayDefaultRouteTablePropagationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts">Ec2TransitGatewayDefaultRouteTablePropagationTimeouts</a>

---

##### `TransitGatewayIdInput`<sup>Optional</sup> <a name="TransitGatewayIdInput" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.transitGatewayIdInput"></a>

```csharp
public string TransitGatewayIdInput { get; }
```

- *Type:* string

---

##### `TransitGatewayRouteTableIdInput`<sup>Optional</sup> <a name="TransitGatewayRouteTableIdInput" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.transitGatewayRouteTableIdInput"></a>

```csharp
public string TransitGatewayRouteTableIdInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; }
```

- *Type:* string

---

##### `TransitGatewayRouteTableId`<sup>Required</sup> <a name="TransitGatewayRouteTableId" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.transitGatewayRouteTableId"></a>

```csharp
public string TransitGatewayRouteTableId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayDefaultRouteTablePropagationConfig <a name="Ec2TransitGatewayDefaultRouteTablePropagationConfig" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2TransitGatewayDefaultRouteTablePropagationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string TransitGatewayId,
    string TransitGatewayRouteTableId,
    string Region = null,
    Ec2TransitGatewayDefaultRouteTablePropagationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#transit_gateway_id Ec2TransitGatewayDefaultRouteTablePropagation#transit_gateway_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.transitGatewayRouteTableId">TransitGatewayRouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#transit_gateway_route_table_id Ec2TransitGatewayDefaultRouteTablePropagation#transit_gateway_route_table_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts">Ec2TransitGatewayDefaultRouteTablePropagationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#transit_gateway_id Ec2TransitGatewayDefaultRouteTablePropagation#transit_gateway_id}.

---

##### `TransitGatewayRouteTableId`<sup>Required</sup> <a name="TransitGatewayRouteTableId" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.transitGatewayRouteTableId"></a>

```csharp
public string TransitGatewayRouteTableId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#transit_gateway_route_table_id Ec2TransitGatewayDefaultRouteTablePropagation#transit_gateway_route_table_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#region Ec2TransitGatewayDefaultRouteTablePropagation#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationConfig.property.timeouts"></a>

```csharp
public Ec2TransitGatewayDefaultRouteTablePropagationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts">Ec2TransitGatewayDefaultRouteTablePropagationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#timeouts Ec2TransitGatewayDefaultRouteTablePropagation#timeouts}

---

### Ec2TransitGatewayDefaultRouteTablePropagationTimeouts <a name="Ec2TransitGatewayDefaultRouteTablePropagationTimeouts" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2TransitGatewayDefaultRouteTablePropagationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#create Ec2TransitGatewayDefaultRouteTablePropagation#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#delete Ec2TransitGatewayDefaultRouteTablePropagation#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#update Ec2TransitGatewayDefaultRouteTablePropagation#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference <a name="Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts">Ec2TransitGatewayDefaultRouteTablePropagationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2TransitGatewayDefaultRouteTablePropagationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ec2TransitGatewayDefaultRouteTablePropagation.Ec2TransitGatewayDefaultRouteTablePropagationTimeouts">Ec2TransitGatewayDefaultRouteTablePropagationTimeouts</a>

---



