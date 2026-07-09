# `observabilityadminTelemetryEvaluationForOrganization` Submodule <a name="`observabilityadminTelemetryEvaluationForOrganization` Submodule" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityadminTelemetryEvaluationForOrganization <a name="ObservabilityadminTelemetryEvaluationForOrganization" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization aws_observabilityadmin_telemetry_evaluation_for_organization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ObservabilityadminTelemetryEvaluationForOrganization(Construct Scope, string Id, ObservabilityadminTelemetryEvaluationForOrganizationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig">ObservabilityadminTelemetryEvaluationForOrganizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig">ObservabilityadminTelemetryEvaluationForOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetAllRegions">ResetAllRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.putTimeouts"></a>

```csharp
private void PutTimeouts(ObservabilityadminTelemetryEvaluationForOrganizationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a>

---

##### `ResetAllRegions` <a name="ResetAllRegions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetAllRegions"></a>

```csharp
private void ResetAllRegions()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetRegions"></a>

```csharp
private void ResetRegions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ObservabilityadminTelemetryEvaluationForOrganization resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ObservabilityadminTelemetryEvaluationForOrganization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ObservabilityadminTelemetryEvaluationForOrganization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ObservabilityadminTelemetryEvaluationForOrganization.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ObservabilityadminTelemetryEvaluationForOrganization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ObservabilityadminTelemetryEvaluationForOrganization resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObservabilityadminTelemetryEvaluationForOrganization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObservabilityadminTelemetryEvaluationForOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityadminTelemetryEvaluationForOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.failureReason">FailureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.homeRegion">HomeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference">ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.allRegionsInput">AllRegionsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.allRegions">AllRegions</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.failureReason"></a>

```csharp
public string FailureReason { get; }
```

- *Type:* string

---

##### `HomeRegion`<sup>Required</sup> <a name="HomeRegion" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.homeRegion"></a>

```csharp
public string HomeRegion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.timeouts"></a>

```csharp
public ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference">ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference</a>

---

##### `AllRegionsInput`<sup>Optional</sup> <a name="AllRegionsInput" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.allRegionsInput"></a>

```csharp
public bool|IResolvable AllRegionsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.timeoutsInput"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryEvaluationForOrganizationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a>

---

##### `AllRegions`<sup>Required</sup> <a name="AllRegions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.allRegions"></a>

```csharp
public bool|IResolvable AllRegions { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityadminTelemetryEvaluationForOrganizationConfig <a name="ObservabilityadminTelemetryEvaluationForOrganizationConfig" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ObservabilityadminTelemetryEvaluationForOrganizationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable AllRegions = null,
    string Region = null,
    string[] Regions = null,
    ObservabilityadminTelemetryEvaluationForOrganizationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.allRegions">AllRegions</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#all_regions ObservabilityadminTelemetryEvaluationForOrganization#all_regions}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.regions">Regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#regions ObservabilityadminTelemetryEvaluationForOrganization#regions}. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllRegions`<sup>Optional</sup> <a name="AllRegions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.allRegions"></a>

```csharp
public bool|IResolvable AllRegions { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#all_regions ObservabilityadminTelemetryEvaluationForOrganization#all_regions}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#region ObservabilityadminTelemetryEvaluationForOrganization#region}

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#regions ObservabilityadminTelemetryEvaluationForOrganization#regions}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationConfig.property.timeouts"></a>

```csharp
public ObservabilityadminTelemetryEvaluationForOrganizationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#timeouts ObservabilityadminTelemetryEvaluationForOrganization#timeouts}

---

### ObservabilityadminTelemetryEvaluationForOrganizationTimeouts <a name="ObservabilityadminTelemetryEvaluationForOrganizationTimeouts" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ObservabilityadminTelemetryEvaluationForOrganizationTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#create ObservabilityadminTelemetryEvaluationForOrganization#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/observabilityadmin_telemetry_evaluation_for_organization#delete ObservabilityadminTelemetryEvaluationForOrganization#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference <a name="ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryEvaluationForOrganizationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.observabilityadminTelemetryEvaluationForOrganization.ObservabilityadminTelemetryEvaluationForOrganizationTimeouts">ObservabilityadminTelemetryEvaluationForOrganizationTimeouts</a>

---



