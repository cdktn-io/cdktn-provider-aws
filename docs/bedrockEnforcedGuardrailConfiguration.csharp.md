# `bedrockEnforcedGuardrailConfiguration` Submodule <a name="`bedrockEnforcedGuardrailConfiguration` Submodule" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockEnforcedGuardrailConfiguration <a name="BedrockEnforcedGuardrailConfiguration" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration aws_bedrock_enforced_guardrail_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockEnforcedGuardrailConfiguration(Construct Scope, string Id, BedrockEnforcedGuardrailConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig">BedrockEnforcedGuardrailConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig">BedrockEnforcedGuardrailConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putModelEnforcement">PutModelEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putSelectiveContentGuarding">PutSelectiveContentGuarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetModelEnforcement">ResetModelEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetSelectiveContentGuarding">ResetSelectiveContentGuarding</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutModelEnforcement` <a name="PutModelEnforcement" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putModelEnforcement"></a>

```csharp
private void PutModelEnforcement(IResolvable|BedrockEnforcedGuardrailConfigurationModelEnforcement[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putModelEnforcement.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>[]

---

##### `PutSelectiveContentGuarding` <a name="PutSelectiveContentGuarding" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putSelectiveContentGuarding"></a>

```csharp
private void PutSelectiveContentGuarding(IResolvable|BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putSelectiveContentGuarding.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>[]

---

##### `ResetModelEnforcement` <a name="ResetModelEnforcement" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetModelEnforcement"></a>

```csharp
private void ResetModelEnforcement()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSelectiveContentGuarding` <a name="ResetSelectiveContentGuarding" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetSelectiveContentGuarding"></a>

```csharp
private void ResetSelectiveContentGuarding()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockEnforcedGuardrailConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockEnforcedGuardrailConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockEnforcedGuardrailConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockEnforcedGuardrailConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockEnforcedGuardrailConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockEnforcedGuardrailConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockEnforcedGuardrailConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockEnforcedGuardrailConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockEnforcedGuardrailConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.configId">ConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailId">GuardrailId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.modelEnforcement">ModelEnforcement</a></code> | <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList">BedrockEnforcedGuardrailConfigurationModelEnforcementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.selectiveContentGuarding">SelectiveContentGuarding</a></code> | <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList">BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailArnInput">GuardrailArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailVersionInput">GuardrailVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.modelEnforcementInput">ModelEnforcementInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.selectiveContentGuardingInput">SelectiveContentGuardingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailArn">GuardrailArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailVersion">GuardrailVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.configId"></a>

```csharp
public string ConfigId { get; }
```

- *Type:* string

---

##### `GuardrailId`<sup>Required</sup> <a name="GuardrailId" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailId"></a>

```csharp
public string GuardrailId { get; }
```

- *Type:* string

---

##### `ModelEnforcement`<sup>Required</sup> <a name="ModelEnforcement" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.modelEnforcement"></a>

```csharp
public BedrockEnforcedGuardrailConfigurationModelEnforcementList ModelEnforcement { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList">BedrockEnforcedGuardrailConfigurationModelEnforcementList</a>

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `SelectiveContentGuarding`<sup>Required</sup> <a name="SelectiveContentGuarding" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.selectiveContentGuarding"></a>

```csharp
public BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList SelectiveContentGuarding { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList">BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList</a>

---

##### `GuardrailArnInput`<sup>Optional</sup> <a name="GuardrailArnInput" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailArnInput"></a>

```csharp
public string GuardrailArnInput { get; }
```

- *Type:* string

---

##### `GuardrailVersionInput`<sup>Optional</sup> <a name="GuardrailVersionInput" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailVersionInput"></a>

```csharp
public string GuardrailVersionInput { get; }
```

- *Type:* string

---

##### `ModelEnforcementInput`<sup>Optional</sup> <a name="ModelEnforcementInput" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.modelEnforcementInput"></a>

```csharp
public IResolvable|BedrockEnforcedGuardrailConfigurationModelEnforcement[] ModelEnforcementInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SelectiveContentGuardingInput`<sup>Optional</sup> <a name="SelectiveContentGuardingInput" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.selectiveContentGuardingInput"></a>

```csharp
public IResolvable|BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding[] SelectiveContentGuardingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>[]

---

##### `GuardrailArn`<sup>Required</sup> <a name="GuardrailArn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailArn"></a>

```csharp
public string GuardrailArn { get; }
```

- *Type:* string

---

##### `GuardrailVersion`<sup>Required</sup> <a name="GuardrailVersion" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailVersion"></a>

```csharp
public string GuardrailVersion { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockEnforcedGuardrailConfigurationConfig <a name="BedrockEnforcedGuardrailConfigurationConfig" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockEnforcedGuardrailConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GuardrailArn,
    string GuardrailVersion,
    IResolvable|BedrockEnforcedGuardrailConfigurationModelEnforcement[] ModelEnforcement = null,
    string Region = null,
    IResolvable|BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding[] SelectiveContentGuarding = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.guardrailArn">GuardrailArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_arn BedrockEnforcedGuardrailConfiguration#guardrail_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.guardrailVersion">GuardrailVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_version BedrockEnforcedGuardrailConfiguration#guardrail_version}. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.modelEnforcement">ModelEnforcement</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>[]</code> | model_enforcement block. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.selectiveContentGuarding">SelectiveContentGuarding</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>[]</code> | selective_content_guarding block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GuardrailArn`<sup>Required</sup> <a name="GuardrailArn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.guardrailArn"></a>

```csharp
public string GuardrailArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_arn BedrockEnforcedGuardrailConfiguration#guardrail_arn}.

---

##### `GuardrailVersion`<sup>Required</sup> <a name="GuardrailVersion" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.guardrailVersion"></a>

```csharp
public string GuardrailVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_version BedrockEnforcedGuardrailConfiguration#guardrail_version}.

---

##### `ModelEnforcement`<sup>Optional</sup> <a name="ModelEnforcement" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.modelEnforcement"></a>

```csharp
public IResolvable|BedrockEnforcedGuardrailConfigurationModelEnforcement[] ModelEnforcement { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>[]

model_enforcement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#model_enforcement BedrockEnforcedGuardrailConfiguration#model_enforcement}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#region BedrockEnforcedGuardrailConfiguration#region}

---

##### `SelectiveContentGuarding`<sup>Optional</sup> <a name="SelectiveContentGuarding" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.selectiveContentGuarding"></a>

```csharp
public IResolvable|BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding[] SelectiveContentGuarding { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>[]

selective_content_guarding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#selective_content_guarding BedrockEnforcedGuardrailConfiguration#selective_content_guarding}

---

### BedrockEnforcedGuardrailConfigurationModelEnforcement <a name="BedrockEnforcedGuardrailConfigurationModelEnforcement" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockEnforcedGuardrailConfigurationModelEnforcement {
    string[] ExcludedModels,
    string[] IncludedModels
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.property.excludedModels">ExcludedModels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#excluded_models BedrockEnforcedGuardrailConfiguration#excluded_models}. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.property.includedModels">IncludedModels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#included_models BedrockEnforcedGuardrailConfiguration#included_models}. |

---

##### `ExcludedModels`<sup>Required</sup> <a name="ExcludedModels" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.property.excludedModels"></a>

```csharp
public string[] ExcludedModels { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#excluded_models BedrockEnforcedGuardrailConfiguration#excluded_models}.

---

##### `IncludedModels`<sup>Required</sup> <a name="IncludedModels" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.property.includedModels"></a>

```csharp
public string[] IncludedModels { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#included_models BedrockEnforcedGuardrailConfiguration#included_models}.

---

### BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding <a name="BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding {
    string Messages = null,
    string SystemAttribute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.property.messages">Messages</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#messages BedrockEnforcedGuardrailConfiguration#messages}. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.property.systemAttribute">SystemAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#system BedrockEnforcedGuardrailConfiguration#system}. |

---

##### `Messages`<sup>Optional</sup> <a name="Messages" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.property.messages"></a>

```csharp
public string Messages { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#messages BedrockEnforcedGuardrailConfiguration#messages}.

---

##### `SystemAttribute`<sup>Optional</sup> <a name="SystemAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.property.systemAttribute"></a>

```csharp
public string SystemAttribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#system BedrockEnforcedGuardrailConfiguration#system}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockEnforcedGuardrailConfigurationModelEnforcementList <a name="BedrockEnforcedGuardrailConfigurationModelEnforcementList" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockEnforcedGuardrailConfigurationModelEnforcementList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.get"></a>

```csharp
private BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.property.internalValue"></a>

```csharp
public IResolvable|BedrockEnforcedGuardrailConfigurationModelEnforcement[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>[]

---


### BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference <a name="BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModelsInput">ExcludedModelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModelsInput">IncludedModelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModels">ExcludedModels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModels">IncludedModels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludedModelsInput`<sup>Optional</sup> <a name="ExcludedModelsInput" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModelsInput"></a>

```csharp
public string[] ExcludedModelsInput { get; }
```

- *Type:* string[]

---

##### `IncludedModelsInput`<sup>Optional</sup> <a name="IncludedModelsInput" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModelsInput"></a>

```csharp
public string[] IncludedModelsInput { get; }
```

- *Type:* string[]

---

##### `ExcludedModels`<sup>Required</sup> <a name="ExcludedModels" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModels"></a>

```csharp
public string[] ExcludedModels { get; }
```

- *Type:* string[]

---

##### `IncludedModels`<sup>Required</sup> <a name="IncludedModels" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModels"></a>

```csharp
public string[] IncludedModels { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockEnforcedGuardrailConfigurationModelEnforcement InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>

---


### BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList <a name="BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.get"></a>

```csharp
private BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.property.internalValue"></a>

```csharp
public IResolvable|BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>[]

---


### BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference <a name="BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resetMessages">ResetMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resetSystemAttribute">ResetSystemAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessages` <a name="ResetMessages" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resetMessages"></a>

```csharp
private void ResetMessages()
```

##### `ResetSystemAttribute` <a name="ResetSystemAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resetSystemAttribute"></a>

```csharp
private void ResetSystemAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messagesInput">MessagesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttributeInput">SystemAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messages">Messages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttribute">SystemAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessagesInput`<sup>Optional</sup> <a name="MessagesInput" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messagesInput"></a>

```csharp
public string MessagesInput { get; }
```

- *Type:* string

---

##### `SystemAttributeInput`<sup>Optional</sup> <a name="SystemAttributeInput" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttributeInput"></a>

```csharp
public string SystemAttributeInput { get; }
```

- *Type:* string

---

##### `Messages`<sup>Required</sup> <a name="Messages" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messages"></a>

```csharp
public string Messages { get; }
```

- *Type:* string

---

##### `SystemAttribute`<sup>Required</sup> <a name="SystemAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttribute"></a>

```csharp
public string SystemAttribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>

---



