# `emrserverlessApplication` Submodule <a name="`emrserverlessApplication` Submodule" id="@cdktf/provider-aws.emrserverlessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrserverlessApplication <a name="EmrserverlessApplication" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application aws_emrserverless_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplication(Construct Scope, string Id, EmrserverlessApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig">EmrserverlessApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig">EmrserverlessApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putAutoStartConfiguration">PutAutoStartConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putAutoStopConfiguration">PutAutoStopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putImageConfiguration">PutImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putInitialCapacity">PutInitialCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putInteractiveConfiguration">PutInteractiveConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putMaximumCapacity">PutMaximumCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putMonitoringConfiguration">PutMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putRuntimeConfiguration">PutRuntimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putSchedulerConfiguration">PutSchedulerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetArchitecture">ResetArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetAutoStartConfiguration">ResetAutoStartConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetAutoStopConfiguration">ResetAutoStopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetImageConfiguration">ResetImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetInitialCapacity">ResetInitialCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetInteractiveConfiguration">ResetInteractiveConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetMaximumCapacity">ResetMaximumCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetMonitoringConfiguration">ResetMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetRuntimeConfiguration">ResetRuntimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetSchedulerConfiguration">ResetSchedulerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoStartConfiguration` <a name="PutAutoStartConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putAutoStartConfiguration"></a>

```csharp
private void PutAutoStartConfiguration(EmrserverlessApplicationAutoStartConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putAutoStartConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a>

---

##### `PutAutoStopConfiguration` <a name="PutAutoStopConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putAutoStopConfiguration"></a>

```csharp
private void PutAutoStopConfiguration(EmrserverlessApplicationAutoStopConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putAutoStopConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a>

---

##### `PutImageConfiguration` <a name="PutImageConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putImageConfiguration"></a>

```csharp
private void PutImageConfiguration(EmrserverlessApplicationImageConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putImageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a>

---

##### `PutInitialCapacity` <a name="PutInitialCapacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putInitialCapacity"></a>

```csharp
private void PutInitialCapacity(IResolvable|EmrserverlessApplicationInitialCapacity[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putInitialCapacity.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>[]

---

##### `PutInteractiveConfiguration` <a name="PutInteractiveConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putInteractiveConfiguration"></a>

```csharp
private void PutInteractiveConfiguration(EmrserverlessApplicationInteractiveConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putInteractiveConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfiguration">EmrserverlessApplicationInteractiveConfiguration</a>

---

##### `PutMaximumCapacity` <a name="PutMaximumCapacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putMaximumCapacity"></a>

```csharp
private void PutMaximumCapacity(EmrserverlessApplicationMaximumCapacity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putMaximumCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a>

---

##### `PutMonitoringConfiguration` <a name="PutMonitoringConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putMonitoringConfiguration"></a>

```csharp
private void PutMonitoringConfiguration(EmrserverlessApplicationMonitoringConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putMonitoringConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfiguration">EmrserverlessApplicationMonitoringConfiguration</a>

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putNetworkConfiguration"></a>

```csharp
private void PutNetworkConfiguration(EmrserverlessApplicationNetworkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a>

---

##### `PutRuntimeConfiguration` <a name="PutRuntimeConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putRuntimeConfiguration"></a>

```csharp
private void PutRuntimeConfiguration(IResolvable|EmrserverlessApplicationRuntimeConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putRuntimeConfiguration.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfiguration">EmrserverlessApplicationRuntimeConfiguration</a>[]

---

##### `PutSchedulerConfiguration` <a name="PutSchedulerConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putSchedulerConfiguration"></a>

```csharp
private void PutSchedulerConfiguration(EmrserverlessApplicationSchedulerConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.putSchedulerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfiguration">EmrserverlessApplicationSchedulerConfiguration</a>

---

##### `ResetArchitecture` <a name="ResetArchitecture" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetArchitecture"></a>

```csharp
private void ResetArchitecture()
```

##### `ResetAutoStartConfiguration` <a name="ResetAutoStartConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetAutoStartConfiguration"></a>

```csharp
private void ResetAutoStartConfiguration()
```

##### `ResetAutoStopConfiguration` <a name="ResetAutoStopConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetAutoStopConfiguration"></a>

```csharp
private void ResetAutoStopConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageConfiguration` <a name="ResetImageConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetImageConfiguration"></a>

```csharp
private void ResetImageConfiguration()
```

##### `ResetInitialCapacity` <a name="ResetInitialCapacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetInitialCapacity"></a>

```csharp
private void ResetInitialCapacity()
```

##### `ResetInteractiveConfiguration` <a name="ResetInteractiveConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetInteractiveConfiguration"></a>

```csharp
private void ResetInteractiveConfiguration()
```

##### `ResetMaximumCapacity` <a name="ResetMaximumCapacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetMaximumCapacity"></a>

```csharp
private void ResetMaximumCapacity()
```

##### `ResetMonitoringConfiguration` <a name="ResetMonitoringConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetMonitoringConfiguration"></a>

```csharp
private void ResetMonitoringConfiguration()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetNetworkConfiguration"></a>

```csharp
private void ResetNetworkConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRuntimeConfiguration` <a name="ResetRuntimeConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetRuntimeConfiguration"></a>

```csharp
private void ResetRuntimeConfiguration()
```

##### `ResetSchedulerConfiguration` <a name="ResetSchedulerConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetSchedulerConfiguration"></a>

```csharp
private void ResetSchedulerConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EmrserverlessApplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EmrserverlessApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EmrserverlessApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EmrserverlessApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EmrserverlessApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EmrserverlessApplication resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmrserverlessApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmrserverlessApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EmrserverlessApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStartConfiguration">AutoStartConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference">EmrserverlessApplicationAutoStartConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStopConfiguration">AutoStopConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference">EmrserverlessApplicationAutoStopConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.imageConfiguration">ImageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference">EmrserverlessApplicationImageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.initialCapacity">InitialCapacity</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList">EmrserverlessApplicationInitialCapacityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.interactiveConfiguration">InteractiveConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference">EmrserverlessApplicationInteractiveConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.maximumCapacity">MaximumCapacity</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference">EmrserverlessApplicationMaximumCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.monitoringConfiguration">MonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference">EmrserverlessApplicationMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference">EmrserverlessApplicationNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.runtimeConfiguration">RuntimeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList">EmrserverlessApplicationRuntimeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.schedulerConfiguration">SchedulerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference">EmrserverlessApplicationSchedulerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.architectureInput">ArchitectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStartConfigurationInput">AutoStartConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStopConfigurationInput">AutoStopConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.imageConfigurationInput">ImageConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.initialCapacityInput">InitialCapacityInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.interactiveConfigurationInput">InteractiveConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfiguration">EmrserverlessApplicationInteractiveConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.maximumCapacityInput">MaximumCapacityInput</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.monitoringConfigurationInput">MonitoringConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfiguration">EmrserverlessApplicationMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.releaseLabelInput">ReleaseLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.runtimeConfigurationInput">RuntimeConfigurationInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfiguration">EmrserverlessApplicationRuntimeConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.schedulerConfigurationInput">SchedulerConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfiguration">EmrserverlessApplicationSchedulerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.releaseLabel">ReleaseLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AutoStartConfiguration`<sup>Required</sup> <a name="AutoStartConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStartConfiguration"></a>

```csharp
public EmrserverlessApplicationAutoStartConfigurationOutputReference AutoStartConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference">EmrserverlessApplicationAutoStartConfigurationOutputReference</a>

---

##### `AutoStopConfiguration`<sup>Required</sup> <a name="AutoStopConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStopConfiguration"></a>

```csharp
public EmrserverlessApplicationAutoStopConfigurationOutputReference AutoStopConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference">EmrserverlessApplicationAutoStopConfigurationOutputReference</a>

---

##### `ImageConfiguration`<sup>Required</sup> <a name="ImageConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.imageConfiguration"></a>

```csharp
public EmrserverlessApplicationImageConfigurationOutputReference ImageConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference">EmrserverlessApplicationImageConfigurationOutputReference</a>

---

##### `InitialCapacity`<sup>Required</sup> <a name="InitialCapacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.initialCapacity"></a>

```csharp
public EmrserverlessApplicationInitialCapacityList InitialCapacity { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList">EmrserverlessApplicationInitialCapacityList</a>

---

##### `InteractiveConfiguration`<sup>Required</sup> <a name="InteractiveConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.interactiveConfiguration"></a>

```csharp
public EmrserverlessApplicationInteractiveConfigurationOutputReference InteractiveConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference">EmrserverlessApplicationInteractiveConfigurationOutputReference</a>

---

##### `MaximumCapacity`<sup>Required</sup> <a name="MaximumCapacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.maximumCapacity"></a>

```csharp
public EmrserverlessApplicationMaximumCapacityOutputReference MaximumCapacity { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference">EmrserverlessApplicationMaximumCapacityOutputReference</a>

---

##### `MonitoringConfiguration`<sup>Required</sup> <a name="MonitoringConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.monitoringConfiguration"></a>

```csharp
public EmrserverlessApplicationMonitoringConfigurationOutputReference MonitoringConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference">EmrserverlessApplicationMonitoringConfigurationOutputReference</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.networkConfiguration"></a>

```csharp
public EmrserverlessApplicationNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference">EmrserverlessApplicationNetworkConfigurationOutputReference</a>

---

##### `RuntimeConfiguration`<sup>Required</sup> <a name="RuntimeConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.runtimeConfiguration"></a>

```csharp
public EmrserverlessApplicationRuntimeConfigurationList RuntimeConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList">EmrserverlessApplicationRuntimeConfigurationList</a>

---

##### `SchedulerConfiguration`<sup>Required</sup> <a name="SchedulerConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.schedulerConfiguration"></a>

```csharp
public EmrserverlessApplicationSchedulerConfigurationOutputReference SchedulerConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference">EmrserverlessApplicationSchedulerConfigurationOutputReference</a>

---

##### `ArchitectureInput`<sup>Optional</sup> <a name="ArchitectureInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.architectureInput"></a>

```csharp
public string ArchitectureInput { get; }
```

- *Type:* string

---

##### `AutoStartConfigurationInput`<sup>Optional</sup> <a name="AutoStartConfigurationInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStartConfigurationInput"></a>

```csharp
public EmrserverlessApplicationAutoStartConfiguration AutoStartConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a>

---

##### `AutoStopConfigurationInput`<sup>Optional</sup> <a name="AutoStopConfigurationInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.autoStopConfigurationInput"></a>

```csharp
public EmrserverlessApplicationAutoStopConfiguration AutoStopConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageConfigurationInput`<sup>Optional</sup> <a name="ImageConfigurationInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.imageConfigurationInput"></a>

```csharp
public EmrserverlessApplicationImageConfiguration ImageConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a>

---

##### `InitialCapacityInput`<sup>Optional</sup> <a name="InitialCapacityInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.initialCapacityInput"></a>

```csharp
public IResolvable|EmrserverlessApplicationInitialCapacity[] InitialCapacityInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>[]

---

##### `InteractiveConfigurationInput`<sup>Optional</sup> <a name="InteractiveConfigurationInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.interactiveConfigurationInput"></a>

```csharp
public EmrserverlessApplicationInteractiveConfiguration InteractiveConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfiguration">EmrserverlessApplicationInteractiveConfiguration</a>

---

##### `MaximumCapacityInput`<sup>Optional</sup> <a name="MaximumCapacityInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.maximumCapacityInput"></a>

```csharp
public EmrserverlessApplicationMaximumCapacity MaximumCapacityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a>

---

##### `MonitoringConfigurationInput`<sup>Optional</sup> <a name="MonitoringConfigurationInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.monitoringConfigurationInput"></a>

```csharp
public EmrserverlessApplicationMonitoringConfiguration MonitoringConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfiguration">EmrserverlessApplicationMonitoringConfiguration</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.networkConfigurationInput"></a>

```csharp
public EmrserverlessApplicationNetworkConfiguration NetworkConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReleaseLabelInput`<sup>Optional</sup> <a name="ReleaseLabelInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.releaseLabelInput"></a>

```csharp
public string ReleaseLabelInput { get; }
```

- *Type:* string

---

##### `RuntimeConfigurationInput`<sup>Optional</sup> <a name="RuntimeConfigurationInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.runtimeConfigurationInput"></a>

```csharp
public IResolvable|EmrserverlessApplicationRuntimeConfiguration[] RuntimeConfigurationInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfiguration">EmrserverlessApplicationRuntimeConfiguration</a>[]

---

##### `SchedulerConfigurationInput`<sup>Optional</sup> <a name="SchedulerConfigurationInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.schedulerConfigurationInput"></a>

```csharp
public EmrserverlessApplicationSchedulerConfiguration SchedulerConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfiguration">EmrserverlessApplicationSchedulerConfiguration</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ReleaseLabel`<sup>Required</sup> <a name="ReleaseLabel" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.releaseLabel"></a>

```csharp
public string ReleaseLabel { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmrserverlessApplicationAutoStartConfiguration <a name="EmrserverlessApplicationAutoStartConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationAutoStartConfiguration {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#enabled EmrserverlessApplication#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#enabled EmrserverlessApplication#enabled}.

---

### EmrserverlessApplicationAutoStopConfiguration <a name="EmrserverlessApplicationAutoStopConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationAutoStopConfiguration {
    bool|IResolvable Enabled = null,
    double IdleTimeoutMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#enabled EmrserverlessApplication#enabled}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.property.idleTimeoutMinutes">IdleTimeoutMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#idle_timeout_minutes EmrserverlessApplication#idle_timeout_minutes}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#enabled EmrserverlessApplication#enabled}.

---

##### `IdleTimeoutMinutes`<sup>Optional</sup> <a name="IdleTimeoutMinutes" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration.property.idleTimeoutMinutes"></a>

```csharp
public double IdleTimeoutMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#idle_timeout_minutes EmrserverlessApplication#idle_timeout_minutes}.

---

### EmrserverlessApplicationConfig <a name="EmrserverlessApplicationConfig" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ReleaseLabel,
    string Type,
    string Architecture = null,
    EmrserverlessApplicationAutoStartConfiguration AutoStartConfiguration = null,
    EmrserverlessApplicationAutoStopConfiguration AutoStopConfiguration = null,
    string Id = null,
    EmrserverlessApplicationImageConfiguration ImageConfiguration = null,
    IResolvable|EmrserverlessApplicationInitialCapacity[] InitialCapacity = null,
    EmrserverlessApplicationInteractiveConfiguration InteractiveConfiguration = null,
    EmrserverlessApplicationMaximumCapacity MaximumCapacity = null,
    EmrserverlessApplicationMonitoringConfiguration MonitoringConfiguration = null,
    EmrserverlessApplicationNetworkConfiguration NetworkConfiguration = null,
    string Region = null,
    IResolvable|EmrserverlessApplicationRuntimeConfiguration[] RuntimeConfiguration = null,
    EmrserverlessApplicationSchedulerConfiguration SchedulerConfiguration = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#name EmrserverlessApplication#name}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.releaseLabel">ReleaseLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#release_label EmrserverlessApplication#release_label}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#type EmrserverlessApplication#type}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.architecture">Architecture</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#architecture EmrserverlessApplication#architecture}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.autoStartConfiguration">AutoStartConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a></code> | auto_start_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.autoStopConfiguration">AutoStopConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a></code> | auto_stop_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#id EmrserverlessApplication#id}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.imageConfiguration">ImageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a></code> | image_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.initialCapacity">InitialCapacity</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>[]</code> | initial_capacity block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.interactiveConfiguration">InteractiveConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfiguration">EmrserverlessApplicationInteractiveConfiguration</a></code> | interactive_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.maximumCapacity">MaximumCapacity</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a></code> | maximum_capacity block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.monitoringConfiguration">MonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfiguration">EmrserverlessApplicationMonitoringConfiguration</a></code> | monitoring_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.runtimeConfiguration">RuntimeConfiguration</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfiguration">EmrserverlessApplicationRuntimeConfiguration</a>[]</code> | runtime_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.schedulerConfiguration">SchedulerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfiguration">EmrserverlessApplicationSchedulerConfiguration</a></code> | scheduler_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#tags EmrserverlessApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#tags_all EmrserverlessApplication#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#name EmrserverlessApplication#name}.

---

##### `ReleaseLabel`<sup>Required</sup> <a name="ReleaseLabel" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.releaseLabel"></a>

```csharp
public string ReleaseLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#release_label EmrserverlessApplication#release_label}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#type EmrserverlessApplication#type}.

---

##### `Architecture`<sup>Optional</sup> <a name="Architecture" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.architecture"></a>

```csharp
public string Architecture { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#architecture EmrserverlessApplication#architecture}.

---

##### `AutoStartConfiguration`<sup>Optional</sup> <a name="AutoStartConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.autoStartConfiguration"></a>

```csharp
public EmrserverlessApplicationAutoStartConfiguration AutoStartConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a>

auto_start_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#auto_start_configuration EmrserverlessApplication#auto_start_configuration}

---

##### `AutoStopConfiguration`<sup>Optional</sup> <a name="AutoStopConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.autoStopConfiguration"></a>

```csharp
public EmrserverlessApplicationAutoStopConfiguration AutoStopConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a>

auto_stop_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#auto_stop_configuration EmrserverlessApplication#auto_stop_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#id EmrserverlessApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageConfiguration`<sup>Optional</sup> <a name="ImageConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.imageConfiguration"></a>

```csharp
public EmrserverlessApplicationImageConfiguration ImageConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a>

image_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#image_configuration EmrserverlessApplication#image_configuration}

---

##### `InitialCapacity`<sup>Optional</sup> <a name="InitialCapacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.initialCapacity"></a>

```csharp
public IResolvable|EmrserverlessApplicationInitialCapacity[] InitialCapacity { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>[]

initial_capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#initial_capacity EmrserverlessApplication#initial_capacity}

---

##### `InteractiveConfiguration`<sup>Optional</sup> <a name="InteractiveConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.interactiveConfiguration"></a>

```csharp
public EmrserverlessApplicationInteractiveConfiguration InteractiveConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfiguration">EmrserverlessApplicationInteractiveConfiguration</a>

interactive_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#interactive_configuration EmrserverlessApplication#interactive_configuration}

---

##### `MaximumCapacity`<sup>Optional</sup> <a name="MaximumCapacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.maximumCapacity"></a>

```csharp
public EmrserverlessApplicationMaximumCapacity MaximumCapacity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a>

maximum_capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#maximum_capacity EmrserverlessApplication#maximum_capacity}

---

##### `MonitoringConfiguration`<sup>Optional</sup> <a name="MonitoringConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.monitoringConfiguration"></a>

```csharp
public EmrserverlessApplicationMonitoringConfiguration MonitoringConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfiguration">EmrserverlessApplicationMonitoringConfiguration</a>

monitoring_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#monitoring_configuration EmrserverlessApplication#monitoring_configuration}

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.networkConfiguration"></a>

```csharp
public EmrserverlessApplicationNetworkConfiguration NetworkConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#network_configuration EmrserverlessApplication#network_configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#region EmrserverlessApplication#region}

---

##### `RuntimeConfiguration`<sup>Optional</sup> <a name="RuntimeConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.runtimeConfiguration"></a>

```csharp
public IResolvable|EmrserverlessApplicationRuntimeConfiguration[] RuntimeConfiguration { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfiguration">EmrserverlessApplicationRuntimeConfiguration</a>[]

runtime_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#runtime_configuration EmrserverlessApplication#runtime_configuration}

---

##### `SchedulerConfiguration`<sup>Optional</sup> <a name="SchedulerConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.schedulerConfiguration"></a>

```csharp
public EmrserverlessApplicationSchedulerConfiguration SchedulerConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfiguration">EmrserverlessApplicationSchedulerConfiguration</a>

scheduler_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#scheduler_configuration EmrserverlessApplication#scheduler_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#tags EmrserverlessApplication#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#tags_all EmrserverlessApplication#tags_all}.

---

### EmrserverlessApplicationImageConfiguration <a name="EmrserverlessApplicationImageConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationImageConfiguration {
    string ImageUri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration.property.imageUri">ImageUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#image_uri EmrserverlessApplication#image_uri}. |

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration.property.imageUri"></a>

```csharp
public string ImageUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#image_uri EmrserverlessApplication#image_uri}.

---

### EmrserverlessApplicationInitialCapacity <a name="EmrserverlessApplicationInitialCapacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationInitialCapacity {
    string InitialCapacityType,
    EmrserverlessApplicationInitialCapacityInitialCapacityConfig InitialCapacityConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.property.initialCapacityType">InitialCapacityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#initial_capacity_type EmrserverlessApplication#initial_capacity_type}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.property.initialCapacityConfig">InitialCapacityConfig</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig">EmrserverlessApplicationInitialCapacityInitialCapacityConfig</a></code> | initial_capacity_config block. |

---

##### `InitialCapacityType`<sup>Required</sup> <a name="InitialCapacityType" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.property.initialCapacityType"></a>

```csharp
public string InitialCapacityType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#initial_capacity_type EmrserverlessApplication#initial_capacity_type}.

---

##### `InitialCapacityConfig`<sup>Optional</sup> <a name="InitialCapacityConfig" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity.property.initialCapacityConfig"></a>

```csharp
public EmrserverlessApplicationInitialCapacityInitialCapacityConfig InitialCapacityConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig">EmrserverlessApplicationInitialCapacityInitialCapacityConfig</a>

initial_capacity_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#initial_capacity_config EmrserverlessApplication#initial_capacity_config}

---

### EmrserverlessApplicationInitialCapacityInitialCapacityConfig <a name="EmrserverlessApplicationInitialCapacityInitialCapacityConfig" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationInitialCapacityInitialCapacityConfig {
    double WorkerCount,
    EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration WorkerConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig.property.workerCount">WorkerCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#worker_count EmrserverlessApplication#worker_count}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig.property.workerConfiguration">WorkerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration</a></code> | worker_configuration block. |

---

##### `WorkerCount`<sup>Required</sup> <a name="WorkerCount" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig.property.workerCount"></a>

```csharp
public double WorkerCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#worker_count EmrserverlessApplication#worker_count}.

---

##### `WorkerConfiguration`<sup>Optional</sup> <a name="WorkerConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig.property.workerConfiguration"></a>

```csharp
public EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration WorkerConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration</a>

worker_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#worker_configuration EmrserverlessApplication#worker_configuration}

---

### EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration <a name="EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration {
    string Cpu,
    string Memory,
    string Disk = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration.property.cpu">Cpu</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#cpu EmrserverlessApplication#cpu}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration.property.memory">Memory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#memory EmrserverlessApplication#memory}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration.property.disk">Disk</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#disk EmrserverlessApplication#disk}. |

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration.property.cpu"></a>

```csharp
public string Cpu { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#cpu EmrserverlessApplication#cpu}.

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration.property.memory"></a>

```csharp
public string Memory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#memory EmrserverlessApplication#memory}.

---

##### `Disk`<sup>Optional</sup> <a name="Disk" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration.property.disk"></a>

```csharp
public string Disk { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#disk EmrserverlessApplication#disk}.

---

### EmrserverlessApplicationInteractiveConfiguration <a name="EmrserverlessApplicationInteractiveConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationInteractiveConfiguration {
    bool|IResolvable LivyEndpointEnabled = null,
    bool|IResolvable StudioEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfiguration.property.livyEndpointEnabled">LivyEndpointEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#livy_endpoint_enabled EmrserverlessApplication#livy_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfiguration.property.studioEnabled">StudioEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#studio_enabled EmrserverlessApplication#studio_enabled}. |

---

##### `LivyEndpointEnabled`<sup>Optional</sup> <a name="LivyEndpointEnabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfiguration.property.livyEndpointEnabled"></a>

```csharp
public bool|IResolvable LivyEndpointEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#livy_endpoint_enabled EmrserverlessApplication#livy_endpoint_enabled}.

---

##### `StudioEnabled`<sup>Optional</sup> <a name="StudioEnabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfiguration.property.studioEnabled"></a>

```csharp
public bool|IResolvable StudioEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#studio_enabled EmrserverlessApplication#studio_enabled}.

---

### EmrserverlessApplicationMaximumCapacity <a name="EmrserverlessApplicationMaximumCapacity" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationMaximumCapacity {
    string Cpu,
    string Memory,
    string Disk = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.cpu">Cpu</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#cpu EmrserverlessApplication#cpu}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.memory">Memory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#memory EmrserverlessApplication#memory}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.disk">Disk</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#disk EmrserverlessApplication#disk}. |

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.cpu"></a>

```csharp
public string Cpu { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#cpu EmrserverlessApplication#cpu}.

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.memory"></a>

```csharp
public string Memory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#memory EmrserverlessApplication#memory}.

---

##### `Disk`<sup>Optional</sup> <a name="Disk" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity.property.disk"></a>

```csharp
public string Disk { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#disk EmrserverlessApplication#disk}.

---

### EmrserverlessApplicationMonitoringConfiguration <a name="EmrserverlessApplicationMonitoringConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationMonitoringConfiguration {
    EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration CloudwatchLoggingConfiguration = null,
    EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration ManagedPersistenceMonitoringConfiguration = null,
    EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration PrometheusMonitoringConfiguration = null,
    EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration S3MonitoringConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfiguration.property.cloudwatchLoggingConfiguration">CloudwatchLoggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration">EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | cloudwatch_logging_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfiguration.property.managedPersistenceMonitoringConfiguration">ManagedPersistenceMonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration">EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration</a></code> | managed_persistence_monitoring_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfiguration.property.prometheusMonitoringConfiguration">PrometheusMonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration">EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration</a></code> | prometheus_monitoring_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfiguration.property.s3MonitoringConfiguration">S3MonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration">EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration</a></code> | s3_monitoring_configuration block. |

---

##### `CloudwatchLoggingConfiguration`<sup>Optional</sup> <a name="CloudwatchLoggingConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfiguration.property.cloudwatchLoggingConfiguration"></a>

```csharp
public EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration CloudwatchLoggingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration">EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration</a>

cloudwatch_logging_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#cloudwatch_logging_configuration EmrserverlessApplication#cloudwatch_logging_configuration}

---

##### `ManagedPersistenceMonitoringConfiguration`<sup>Optional</sup> <a name="ManagedPersistenceMonitoringConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfiguration.property.managedPersistenceMonitoringConfiguration"></a>

```csharp
public EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration ManagedPersistenceMonitoringConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration">EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration</a>

managed_persistence_monitoring_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#managed_persistence_monitoring_configuration EmrserverlessApplication#managed_persistence_monitoring_configuration}

---

##### `PrometheusMonitoringConfiguration`<sup>Optional</sup> <a name="PrometheusMonitoringConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfiguration.property.prometheusMonitoringConfiguration"></a>

```csharp
public EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration PrometheusMonitoringConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration">EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration</a>

prometheus_monitoring_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#prometheus_monitoring_configuration EmrserverlessApplication#prometheus_monitoring_configuration}

---

##### `S3MonitoringConfiguration`<sup>Optional</sup> <a name="S3MonitoringConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfiguration.property.s3MonitoringConfiguration"></a>

```csharp
public EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration S3MonitoringConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration">EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration</a>

s3_monitoring_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#s3_monitoring_configuration EmrserverlessApplication#s3_monitoring_configuration}

---

### EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration <a name="EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration {
    bool|IResolvable Enabled,
    string EncryptionKeyArn = null,
    string LogGroupName = null,
    string LogStreamNamePrefix = null,
    IResolvable|EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes[] LogTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#enabled EmrserverlessApplication#enabled}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#encryption_key_arn EmrserverlessApplication#encryption_key_arn}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logGroupName">LogGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#log_group_name EmrserverlessApplication#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logStreamNamePrefix">LogStreamNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#log_stream_name_prefix EmrserverlessApplication#log_stream_name_prefix}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logTypes">LogTypes</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes">EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes</a>[]</code> | log_types block. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#enabled EmrserverlessApplication#enabled}.

---

##### `EncryptionKeyArn`<sup>Optional</sup> <a name="EncryptionKeyArn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#encryption_key_arn EmrserverlessApplication#encryption_key_arn}.

---

##### `LogGroupName`<sup>Optional</sup> <a name="LogGroupName" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logGroupName"></a>

```csharp
public string LogGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#log_group_name EmrserverlessApplication#log_group_name}.

---

##### `LogStreamNamePrefix`<sup>Optional</sup> <a name="LogStreamNamePrefix" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logStreamNamePrefix"></a>

```csharp
public string LogStreamNamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#log_stream_name_prefix EmrserverlessApplication#log_stream_name_prefix}.

---

##### `LogTypes`<sup>Optional</sup> <a name="LogTypes" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logTypes"></a>

```csharp
public IResolvable|EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes[] LogTypes { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes">EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes</a>[]

log_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#log_types EmrserverlessApplication#log_types}

---

### EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes <a name="EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#name EmrserverlessApplication#name}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#values EmrserverlessApplication#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#name EmrserverlessApplication#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#values EmrserverlessApplication#values}.

---

### EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration <a name="EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration {
    bool|IResolvable Enabled = null,
    string EncryptionKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#enabled EmrserverlessApplication#enabled}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#encryption_key_arn EmrserverlessApplication#encryption_key_arn}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#enabled EmrserverlessApplication#enabled}.

---

##### `EncryptionKeyArn`<sup>Optional</sup> <a name="EncryptionKeyArn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#encryption_key_arn EmrserverlessApplication#encryption_key_arn}.

---

### EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration <a name="EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration {
    string RemoteWriteUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration.property.remoteWriteUrl">RemoteWriteUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#remote_write_url EmrserverlessApplication#remote_write_url}. |

---

##### `RemoteWriteUrl`<sup>Optional</sup> <a name="RemoteWriteUrl" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration.property.remoteWriteUrl"></a>

```csharp
public string RemoteWriteUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#remote_write_url EmrserverlessApplication#remote_write_url}.

---

### EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration <a name="EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration {
    string EncryptionKeyArn = null,
    string LogUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#encryption_key_arn EmrserverlessApplication#encryption_key_arn}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration.property.logUri">LogUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#log_uri EmrserverlessApplication#log_uri}. |

---

##### `EncryptionKeyArn`<sup>Optional</sup> <a name="EncryptionKeyArn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#encryption_key_arn EmrserverlessApplication#encryption_key_arn}.

---

##### `LogUri`<sup>Optional</sup> <a name="LogUri" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration.property.logUri"></a>

```csharp
public string LogUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#log_uri EmrserverlessApplication#log_uri}.

---

### EmrserverlessApplicationNetworkConfiguration <a name="EmrserverlessApplicationNetworkConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationNetworkConfiguration {
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#security_group_ids EmrserverlessApplication#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#subnet_ids EmrserverlessApplication#subnet_ids}. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#security_group_ids EmrserverlessApplication#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#subnet_ids EmrserverlessApplication#subnet_ids}.

---

### EmrserverlessApplicationRuntimeConfiguration <a name="EmrserverlessApplicationRuntimeConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationRuntimeConfiguration {
    string Classification,
    System.Collections.Generic.IDictionary<string, string> Properties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfiguration.property.classification">Classification</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#classification EmrserverlessApplication#classification}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfiguration.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#properties EmrserverlessApplication#properties}. |

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfiguration.property.classification"></a>

```csharp
public string Classification { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#classification EmrserverlessApplication#classification}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfiguration.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#properties EmrserverlessApplication#properties}.

---

### EmrserverlessApplicationSchedulerConfiguration <a name="EmrserverlessApplicationSchedulerConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationSchedulerConfiguration {
    double MaxConcurrentRuns = null,
    double QueueTimeoutMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfiguration.property.maxConcurrentRuns">MaxConcurrentRuns</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#max_concurrent_runs EmrserverlessApplication#max_concurrent_runs}. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfiguration.property.queueTimeoutMinutes">QueueTimeoutMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#queue_timeout_minutes EmrserverlessApplication#queue_timeout_minutes}. |

---

##### `MaxConcurrentRuns`<sup>Optional</sup> <a name="MaxConcurrentRuns" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfiguration.property.maxConcurrentRuns"></a>

```csharp
public double MaxConcurrentRuns { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#max_concurrent_runs EmrserverlessApplication#max_concurrent_runs}.

---

##### `QueueTimeoutMinutes`<sup>Optional</sup> <a name="QueueTimeoutMinutes" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfiguration.property.queueTimeoutMinutes"></a>

```csharp
public double QueueTimeoutMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/emrserverless_application#queue_timeout_minutes EmrserverlessApplication#queue_timeout_minutes}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrserverlessApplicationAutoStartConfigurationOutputReference <a name="EmrserverlessApplicationAutoStartConfigurationOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationAutoStartConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfigurationOutputReference.property.internalValue"></a>

```csharp
public EmrserverlessApplicationAutoStartConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStartConfiguration">EmrserverlessApplicationAutoStartConfiguration</a>

---


### EmrserverlessApplicationAutoStopConfigurationOutputReference <a name="EmrserverlessApplicationAutoStopConfigurationOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationAutoStopConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resetIdleTimeoutMinutes">ResetIdleTimeoutMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetIdleTimeoutMinutes` <a name="ResetIdleTimeoutMinutes" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.resetIdleTimeoutMinutes"></a>

```csharp
private void ResetIdleTimeoutMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutesInput">IdleTimeoutMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutes">IdleTimeoutMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IdleTimeoutMinutesInput`<sup>Optional</sup> <a name="IdleTimeoutMinutesInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutesInput"></a>

```csharp
public double IdleTimeoutMinutesInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IdleTimeoutMinutes`<sup>Required</sup> <a name="IdleTimeoutMinutes" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutes"></a>

```csharp
public double IdleTimeoutMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfigurationOutputReference.property.internalValue"></a>

```csharp
public EmrserverlessApplicationAutoStopConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationAutoStopConfiguration">EmrserverlessApplicationAutoStopConfiguration</a>

---


### EmrserverlessApplicationImageConfigurationOutputReference <a name="EmrserverlessApplicationImageConfigurationOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationImageConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.imageUriInput"></a>

```csharp
public string ImageUriInput { get; }
```

- *Type:* string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfigurationOutputReference.property.internalValue"></a>

```csharp
public EmrserverlessApplicationImageConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationImageConfiguration">EmrserverlessApplicationImageConfiguration</a>

---


### EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference <a name="EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.putWorkerConfiguration">PutWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.resetWorkerConfiguration">ResetWorkerConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWorkerConfiguration` <a name="PutWorkerConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.putWorkerConfiguration"></a>

```csharp
private void PutWorkerConfiguration(EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.putWorkerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration</a>

---

##### `ResetWorkerConfiguration` <a name="ResetWorkerConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.resetWorkerConfiguration"></a>

```csharp
private void ResetWorkerConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerConfiguration">WorkerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerConfigurationInput">WorkerConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerCountInput">WorkerCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerCount">WorkerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig">EmrserverlessApplicationInitialCapacityInitialCapacityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkerConfiguration`<sup>Required</sup> <a name="WorkerConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerConfiguration"></a>

```csharp
public EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference WorkerConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference</a>

---

##### `WorkerConfigurationInput`<sup>Optional</sup> <a name="WorkerConfigurationInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerConfigurationInput"></a>

```csharp
public EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration WorkerConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration</a>

---

##### `WorkerCountInput`<sup>Optional</sup> <a name="WorkerCountInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerCountInput"></a>

```csharp
public double WorkerCountInput { get; }
```

- *Type:* double

---

##### `WorkerCount`<sup>Required</sup> <a name="WorkerCount" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.workerCount"></a>

```csharp
public double WorkerCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference.property.internalValue"></a>

```csharp
public EmrserverlessApplicationInitialCapacityInitialCapacityConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig">EmrserverlessApplicationInitialCapacityInitialCapacityConfig</a>

---


### EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference <a name="EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.resetDisk">ResetDisk</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisk` <a name="ResetDisk" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.resetDisk"></a>

```csharp
private void ResetDisk()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.cpuInput">CpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.diskInput">DiskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.memoryInput">MemoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.cpu">Cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.disk">Disk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.memory">Memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.cpuInput"></a>

```csharp
public string CpuInput { get; }
```

- *Type:* string

---

##### `DiskInput`<sup>Optional</sup> <a name="DiskInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.diskInput"></a>

```csharp
public string DiskInput { get; }
```

- *Type:* string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.memoryInput"></a>

```csharp
public string MemoryInput { get; }
```

- *Type:* string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.cpu"></a>

```csharp
public string Cpu { get; }
```

- *Type:* string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.disk"></a>

```csharp
public string Disk { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.memory"></a>

```csharp
public string Memory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference.property.internalValue"></a>

```csharp
public EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration">EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration</a>

---


### EmrserverlessApplicationInitialCapacityList <a name="EmrserverlessApplicationInitialCapacityList" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationInitialCapacityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.get"></a>

```csharp
private EmrserverlessApplicationInitialCapacityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityList.property.internalValue"></a>

```csharp
public IResolvable|EmrserverlessApplicationInitialCapacity[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>[]

---


### EmrserverlessApplicationInitialCapacityOutputReference <a name="EmrserverlessApplicationInitialCapacityOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationInitialCapacityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.putInitialCapacityConfig">PutInitialCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resetInitialCapacityConfig">ResetInitialCapacityConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInitialCapacityConfig` <a name="PutInitialCapacityConfig" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.putInitialCapacityConfig"></a>

```csharp
private void PutInitialCapacityConfig(EmrserverlessApplicationInitialCapacityInitialCapacityConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.putInitialCapacityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig">EmrserverlessApplicationInitialCapacityInitialCapacityConfig</a>

---

##### `ResetInitialCapacityConfig` <a name="ResetInitialCapacityConfig" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.resetInitialCapacityConfig"></a>

```csharp
private void ResetInitialCapacityConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityConfig">InitialCapacityConfig</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference">EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityConfigInput">InitialCapacityConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig">EmrserverlessApplicationInitialCapacityInitialCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityTypeInput">InitialCapacityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityType">InitialCapacityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InitialCapacityConfig`<sup>Required</sup> <a name="InitialCapacityConfig" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityConfig"></a>

```csharp
public EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference InitialCapacityConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference">EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference</a>

---

##### `InitialCapacityConfigInput`<sup>Optional</sup> <a name="InitialCapacityConfigInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityConfigInput"></a>

```csharp
public EmrserverlessApplicationInitialCapacityInitialCapacityConfig InitialCapacityConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityInitialCapacityConfig">EmrserverlessApplicationInitialCapacityInitialCapacityConfig</a>

---

##### `InitialCapacityTypeInput`<sup>Optional</sup> <a name="InitialCapacityTypeInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityTypeInput"></a>

```csharp
public string InitialCapacityTypeInput { get; }
```

- *Type:* string

---

##### `InitialCapacityType`<sup>Required</sup> <a name="InitialCapacityType" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.initialCapacityType"></a>

```csharp
public string InitialCapacityType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EmrserverlessApplicationInitialCapacity InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInitialCapacity">EmrserverlessApplicationInitialCapacity</a>

---


### EmrserverlessApplicationInteractiveConfigurationOutputReference <a name="EmrserverlessApplicationInteractiveConfigurationOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationInteractiveConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.resetLivyEndpointEnabled">ResetLivyEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.resetStudioEnabled">ResetStudioEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLivyEndpointEnabled` <a name="ResetLivyEndpointEnabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.resetLivyEndpointEnabled"></a>

```csharp
private void ResetLivyEndpointEnabled()
```

##### `ResetStudioEnabled` <a name="ResetStudioEnabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.resetStudioEnabled"></a>

```csharp
private void ResetStudioEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.property.livyEndpointEnabledInput">LivyEndpointEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.property.studioEnabledInput">StudioEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.property.livyEndpointEnabled">LivyEndpointEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.property.studioEnabled">StudioEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfiguration">EmrserverlessApplicationInteractiveConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LivyEndpointEnabledInput`<sup>Optional</sup> <a name="LivyEndpointEnabledInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.property.livyEndpointEnabledInput"></a>

```csharp
public bool|IResolvable LivyEndpointEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `StudioEnabledInput`<sup>Optional</sup> <a name="StudioEnabledInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.property.studioEnabledInput"></a>

```csharp
public bool|IResolvable StudioEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `LivyEndpointEnabled`<sup>Required</sup> <a name="LivyEndpointEnabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.property.livyEndpointEnabled"></a>

```csharp
public bool|IResolvable LivyEndpointEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `StudioEnabled`<sup>Required</sup> <a name="StudioEnabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.property.studioEnabled"></a>

```csharp
public bool|IResolvable StudioEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfigurationOutputReference.property.internalValue"></a>

```csharp
public EmrserverlessApplicationInteractiveConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationInteractiveConfiguration">EmrserverlessApplicationInteractiveConfiguration</a>

---


### EmrserverlessApplicationMaximumCapacityOutputReference <a name="EmrserverlessApplicationMaximumCapacityOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationMaximumCapacityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resetDisk">ResetDisk</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisk` <a name="ResetDisk" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.resetDisk"></a>

```csharp
private void ResetDisk()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.cpuInput">CpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.diskInput">DiskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.memoryInput">MemoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.cpu">Cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.disk">Disk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.memory">Memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.cpuInput"></a>

```csharp
public string CpuInput { get; }
```

- *Type:* string

---

##### `DiskInput`<sup>Optional</sup> <a name="DiskInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.diskInput"></a>

```csharp
public string DiskInput { get; }
```

- *Type:* string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.memoryInput"></a>

```csharp
public string MemoryInput { get; }
```

- *Type:* string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.cpu"></a>

```csharp
public string Cpu { get; }
```

- *Type:* string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.disk"></a>

```csharp
public string Disk { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.memory"></a>

```csharp
public string Memory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacityOutputReference.property.internalValue"></a>

```csharp
public EmrserverlessApplicationMaximumCapacity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMaximumCapacity">EmrserverlessApplicationMaximumCapacity</a>

---


### EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList <a name="EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.get"></a>

```csharp
private EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes">EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList.property.internalValue"></a>

```csharp
public IResolvable|EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes">EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes</a>[]

---


### EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference <a name="EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes">EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes">EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes</a>

---


### EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference <a name="EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.putLogTypes">PutLogTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetEncryptionKeyArn">ResetEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogGroupName">ResetLogGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogStreamNamePrefix">ResetLogStreamNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogTypes">ResetLogTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogTypes` <a name="PutLogTypes" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.putLogTypes"></a>

```csharp
private void PutLogTypes(IResolvable|EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.putLogTypes.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes">EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes</a>[]

---

##### `ResetEncryptionKeyArn` <a name="ResetEncryptionKeyArn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetEncryptionKeyArn"></a>

```csharp
private void ResetEncryptionKeyArn()
```

##### `ResetLogGroupName` <a name="ResetLogGroupName" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogGroupName"></a>

```csharp
private void ResetLogGroupName()
```

##### `ResetLogStreamNamePrefix` <a name="ResetLogStreamNamePrefix" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogStreamNamePrefix"></a>

```csharp
private void ResetLogStreamNamePrefix()
```

##### `ResetLogTypes` <a name="ResetLogTypes" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogTypes"></a>

```csharp
private void ResetLogTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypes">LogTypes</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList">EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.encryptionKeyArnInput">EncryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefixInput">LogStreamNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypesInput">LogTypesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes">EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefix">LogStreamNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration">EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogTypes`<sup>Required</sup> <a name="LogTypes" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypes"></a>

```csharp
public EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList LogTypes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList">EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypesList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EncryptionKeyArnInput`<sup>Optional</sup> <a name="EncryptionKeyArnInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.encryptionKeyArnInput"></a>

```csharp
public string EncryptionKeyArnInput { get; }
```

- *Type:* string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroupNameInput"></a>

```csharp
public string LogGroupNameInput { get; }
```

- *Type:* string

---

##### `LogStreamNamePrefixInput`<sup>Optional</sup> <a name="LogStreamNamePrefixInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefixInput"></a>

```csharp
public string LogStreamNamePrefixInput { get; }
```

- *Type:* string

---

##### `LogTypesInput`<sup>Optional</sup> <a name="LogTypesInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypesInput"></a>

```csharp
public IResolvable|EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes[] LogTypesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes">EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationLogTypes</a>[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EncryptionKeyArn`<sup>Required</sup> <a name="EncryptionKeyArn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; }
```

- *Type:* string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

##### `LogStreamNamePrefix`<sup>Required</sup> <a name="LogStreamNamePrefix" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefix"></a>

```csharp
public string LogStreamNamePrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.internalValue"></a>

```csharp
public EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration">EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---


### EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference <a name="EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.resetEncryptionKeyArn">ResetEncryptionKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEncryptionKeyArn` <a name="ResetEncryptionKeyArn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.resetEncryptionKeyArn"></a>

```csharp
private void ResetEncryptionKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.property.encryptionKeyArnInput">EncryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration">EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EncryptionKeyArnInput`<sup>Optional</sup> <a name="EncryptionKeyArnInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.property.encryptionKeyArnInput"></a>

```csharp
public string EncryptionKeyArnInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EncryptionKeyArn`<sup>Required</sup> <a name="EncryptionKeyArn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference.property.internalValue"></a>

```csharp
public EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration">EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration</a>

---


### EmrserverlessApplicationMonitoringConfigurationOutputReference <a name="EmrserverlessApplicationMonitoringConfigurationOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationMonitoringConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration">PutCloudwatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.putManagedPersistenceMonitoringConfiguration">PutManagedPersistenceMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.putPrometheusMonitoringConfiguration">PutPrometheusMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.putS3MonitoringConfiguration">PutS3MonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.resetCloudwatchLoggingConfiguration">ResetCloudwatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.resetManagedPersistenceMonitoringConfiguration">ResetManagedPersistenceMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.resetPrometheusMonitoringConfiguration">ResetPrometheusMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.resetS3MonitoringConfiguration">ResetS3MonitoringConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLoggingConfiguration` <a name="PutCloudwatchLoggingConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration"></a>

```csharp
private void PutCloudwatchLoggingConfiguration(EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration">EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---

##### `PutManagedPersistenceMonitoringConfiguration` <a name="PutManagedPersistenceMonitoringConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.putManagedPersistenceMonitoringConfiguration"></a>

```csharp
private void PutManagedPersistenceMonitoringConfiguration(EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.putManagedPersistenceMonitoringConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration">EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration</a>

---

##### `PutPrometheusMonitoringConfiguration` <a name="PutPrometheusMonitoringConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.putPrometheusMonitoringConfiguration"></a>

```csharp
private void PutPrometheusMonitoringConfiguration(EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.putPrometheusMonitoringConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration">EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration</a>

---

##### `PutS3MonitoringConfiguration` <a name="PutS3MonitoringConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.putS3MonitoringConfiguration"></a>

```csharp
private void PutS3MonitoringConfiguration(EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.putS3MonitoringConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration">EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration</a>

---

##### `ResetCloudwatchLoggingConfiguration` <a name="ResetCloudwatchLoggingConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.resetCloudwatchLoggingConfiguration"></a>

```csharp
private void ResetCloudwatchLoggingConfiguration()
```

##### `ResetManagedPersistenceMonitoringConfiguration` <a name="ResetManagedPersistenceMonitoringConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.resetManagedPersistenceMonitoringConfiguration"></a>

```csharp
private void ResetManagedPersistenceMonitoringConfiguration()
```

##### `ResetPrometheusMonitoringConfiguration` <a name="ResetPrometheusMonitoringConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.resetPrometheusMonitoringConfiguration"></a>

```csharp
private void ResetPrometheusMonitoringConfiguration()
```

##### `ResetS3MonitoringConfiguration` <a name="ResetS3MonitoringConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.resetS3MonitoringConfiguration"></a>

```csharp
private void ResetS3MonitoringConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfiguration">CloudwatchLoggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference">EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.property.managedPersistenceMonitoringConfiguration">ManagedPersistenceMonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference">EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.property.prometheusMonitoringConfiguration">PrometheusMonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference">EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.property.s3MonitoringConfiguration">S3MonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference">EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfigurationInput">CloudwatchLoggingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration">EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.property.managedPersistenceMonitoringConfigurationInput">ManagedPersistenceMonitoringConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration">EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.property.prometheusMonitoringConfigurationInput">PrometheusMonitoringConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration">EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.property.s3MonitoringConfigurationInput">S3MonitoringConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration">EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfiguration">EmrserverlessApplicationMonitoringConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLoggingConfiguration`<sup>Required</sup> <a name="CloudwatchLoggingConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfiguration"></a>

```csharp
public EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference CloudwatchLoggingConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference">EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference</a>

---

##### `ManagedPersistenceMonitoringConfiguration`<sup>Required</sup> <a name="ManagedPersistenceMonitoringConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.property.managedPersistenceMonitoringConfiguration"></a>

```csharp
public EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference ManagedPersistenceMonitoringConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference">EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfigurationOutputReference</a>

---

##### `PrometheusMonitoringConfiguration`<sup>Required</sup> <a name="PrometheusMonitoringConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.property.prometheusMonitoringConfiguration"></a>

```csharp
public EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference PrometheusMonitoringConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference">EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference</a>

---

##### `S3MonitoringConfiguration`<sup>Required</sup> <a name="S3MonitoringConfiguration" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.property.s3MonitoringConfiguration"></a>

```csharp
public EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference S3MonitoringConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference">EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference</a>

---

##### `CloudwatchLoggingConfigurationInput`<sup>Optional</sup> <a name="CloudwatchLoggingConfigurationInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfigurationInput"></a>

```csharp
public EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration CloudwatchLoggingConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration">EmrserverlessApplicationMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---

##### `ManagedPersistenceMonitoringConfigurationInput`<sup>Optional</sup> <a name="ManagedPersistenceMonitoringConfigurationInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.property.managedPersistenceMonitoringConfigurationInput"></a>

```csharp
public EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration ManagedPersistenceMonitoringConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration">EmrserverlessApplicationMonitoringConfigurationManagedPersistenceMonitoringConfiguration</a>

---

##### `PrometheusMonitoringConfigurationInput`<sup>Optional</sup> <a name="PrometheusMonitoringConfigurationInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.property.prometheusMonitoringConfigurationInput"></a>

```csharp
public EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration PrometheusMonitoringConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration">EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration</a>

---

##### `S3MonitoringConfigurationInput`<sup>Optional</sup> <a name="S3MonitoringConfigurationInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.property.s3MonitoringConfigurationInput"></a>

```csharp
public EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration S3MonitoringConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration">EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationOutputReference.property.internalValue"></a>

```csharp
public EmrserverlessApplicationMonitoringConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfiguration">EmrserverlessApplicationMonitoringConfiguration</a>

---


### EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference <a name="EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.resetRemoteWriteUrl">ResetRemoteWriteUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRemoteWriteUrl` <a name="ResetRemoteWriteUrl" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.resetRemoteWriteUrl"></a>

```csharp
private void ResetRemoteWriteUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.property.remoteWriteUrlInput">RemoteWriteUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.property.remoteWriteUrl">RemoteWriteUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration">EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RemoteWriteUrlInput`<sup>Optional</sup> <a name="RemoteWriteUrlInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.property.remoteWriteUrlInput"></a>

```csharp
public string RemoteWriteUrlInput { get; }
```

- *Type:* string

---

##### `RemoteWriteUrl`<sup>Required</sup> <a name="RemoteWriteUrl" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.property.remoteWriteUrl"></a>

```csharp
public string RemoteWriteUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfigurationOutputReference.property.internalValue"></a>

```csharp
public EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration">EmrserverlessApplicationMonitoringConfigurationPrometheusMonitoringConfiguration</a>

---


### EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference <a name="EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.resetEncryptionKeyArn">ResetEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.resetLogUri">ResetLogUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionKeyArn` <a name="ResetEncryptionKeyArn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.resetEncryptionKeyArn"></a>

```csharp
private void ResetEncryptionKeyArn()
```

##### `ResetLogUri` <a name="ResetLogUri" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.resetLogUri"></a>

```csharp
private void ResetLogUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.encryptionKeyArnInput">EncryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.logUriInput">LogUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.logUri">LogUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration">EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionKeyArnInput`<sup>Optional</sup> <a name="EncryptionKeyArnInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.encryptionKeyArnInput"></a>

```csharp
public string EncryptionKeyArnInput { get; }
```

- *Type:* string

---

##### `LogUriInput`<sup>Optional</sup> <a name="LogUriInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.logUriInput"></a>

```csharp
public string LogUriInput { get; }
```

- *Type:* string

---

##### `EncryptionKeyArn`<sup>Required</sup> <a name="EncryptionKeyArn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; }
```

- *Type:* string

---

##### `LogUri`<sup>Required</sup> <a name="LogUri" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.logUri"></a>

```csharp
public string LogUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.internalValue"></a>

```csharp
public EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration">EmrserverlessApplicationMonitoringConfigurationS3MonitoringConfiguration</a>

---


### EmrserverlessApplicationNetworkConfigurationOutputReference <a name="EmrserverlessApplicationNetworkConfigurationOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public EmrserverlessApplicationNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationNetworkConfiguration">EmrserverlessApplicationNetworkConfiguration</a>

---


### EmrserverlessApplicationRuntimeConfigurationList <a name="EmrserverlessApplicationRuntimeConfigurationList" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationRuntimeConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.get"></a>

```csharp
private EmrserverlessApplicationRuntimeConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfiguration">EmrserverlessApplicationRuntimeConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|EmrserverlessApplicationRuntimeConfiguration[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfiguration">EmrserverlessApplicationRuntimeConfiguration</a>[]

---


### EmrserverlessApplicationRuntimeConfigurationOutputReference <a name="EmrserverlessApplicationRuntimeConfigurationOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationRuntimeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.property.classificationInput">ClassificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.property.classification">Classification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfiguration">EmrserverlessApplicationRuntimeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClassificationInput`<sup>Optional</sup> <a name="ClassificationInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.property.classificationInput"></a>

```csharp
public string ClassificationInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.property.classification"></a>

```csharp
public string Classification { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EmrserverlessApplicationRuntimeConfiguration InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationRuntimeConfiguration">EmrserverlessApplicationRuntimeConfiguration</a>

---


### EmrserverlessApplicationSchedulerConfigurationOutputReference <a name="EmrserverlessApplicationSchedulerConfigurationOutputReference" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrserverlessApplicationSchedulerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.resetMaxConcurrentRuns">ResetMaxConcurrentRuns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.resetQueueTimeoutMinutes">ResetQueueTimeoutMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxConcurrentRuns` <a name="ResetMaxConcurrentRuns" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.resetMaxConcurrentRuns"></a>

```csharp
private void ResetMaxConcurrentRuns()
```

##### `ResetQueueTimeoutMinutes` <a name="ResetQueueTimeoutMinutes" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.resetQueueTimeoutMinutes"></a>

```csharp
private void ResetQueueTimeoutMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.property.maxConcurrentRunsInput">MaxConcurrentRunsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.property.queueTimeoutMinutesInput">QueueTimeoutMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.property.maxConcurrentRuns">MaxConcurrentRuns</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.property.queueTimeoutMinutes">QueueTimeoutMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfiguration">EmrserverlessApplicationSchedulerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxConcurrentRunsInput`<sup>Optional</sup> <a name="MaxConcurrentRunsInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.property.maxConcurrentRunsInput"></a>

```csharp
public double MaxConcurrentRunsInput { get; }
```

- *Type:* double

---

##### `QueueTimeoutMinutesInput`<sup>Optional</sup> <a name="QueueTimeoutMinutesInput" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.property.queueTimeoutMinutesInput"></a>

```csharp
public double QueueTimeoutMinutesInput { get; }
```

- *Type:* double

---

##### `MaxConcurrentRuns`<sup>Required</sup> <a name="MaxConcurrentRuns" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.property.maxConcurrentRuns"></a>

```csharp
public double MaxConcurrentRuns { get; }
```

- *Type:* double

---

##### `QueueTimeoutMinutes`<sup>Required</sup> <a name="QueueTimeoutMinutes" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.property.queueTimeoutMinutes"></a>

```csharp
public double QueueTimeoutMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfigurationOutputReference.property.internalValue"></a>

```csharp
public EmrserverlessApplicationSchedulerConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrserverlessApplication.EmrserverlessApplicationSchedulerConfiguration">EmrserverlessApplicationSchedulerConfiguration</a>

---



