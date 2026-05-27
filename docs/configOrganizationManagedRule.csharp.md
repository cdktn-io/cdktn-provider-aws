# `configOrganizationManagedRule` Submodule <a name="`configOrganizationManagedRule` Submodule" id="@cdktn/provider-aws.configOrganizationManagedRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationManagedRule <a name="ConfigOrganizationManagedRule" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule aws_config_organization_managed_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ConfigOrganizationManagedRule(Construct Scope, string Id, ConfigOrganizationManagedRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig">ConfigOrganizationManagedRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig">ConfigOrganizationManagedRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetExcludedAccounts">ResetExcludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetInputParameters">ResetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetMaximumExecutionFrequency">ResetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetResourceIdScope">ResetResourceIdScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetResourceTypesScope">ResetResourceTypesScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTagKeyScope">ResetTagKeyScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTagValueScope">ResetTagValueScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.putTimeouts"></a>

```csharp
private void PutTimeouts(ConfigOrganizationManagedRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts">ConfigOrganizationManagedRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExcludedAccounts` <a name="ResetExcludedAccounts" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetExcludedAccounts"></a>

```csharp
private void ResetExcludedAccounts()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInputParameters` <a name="ResetInputParameters" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetInputParameters"></a>

```csharp
private void ResetInputParameters()
```

##### `ResetMaximumExecutionFrequency` <a name="ResetMaximumExecutionFrequency" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetMaximumExecutionFrequency"></a>

```csharp
private void ResetMaximumExecutionFrequency()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetResourceIdScope` <a name="ResetResourceIdScope" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetResourceIdScope"></a>

```csharp
private void ResetResourceIdScope()
```

##### `ResetResourceTypesScope` <a name="ResetResourceTypesScope" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetResourceTypesScope"></a>

```csharp
private void ResetResourceTypesScope()
```

##### `ResetTagKeyScope` <a name="ResetTagKeyScope" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTagKeyScope"></a>

```csharp
private void ResetTagKeyScope()
```

##### `ResetTagValueScope` <a name="ResetTagValueScope" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTagValueScope"></a>

```csharp
private void ResetTagValueScope()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigOrganizationManagedRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ConfigOrganizationManagedRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ConfigOrganizationManagedRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ConfigOrganizationManagedRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ConfigOrganizationManagedRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConfigOrganizationManagedRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigOrganizationManagedRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigOrganizationManagedRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConfigOrganizationManagedRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference">ConfigOrganizationManagedRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.excludedAccountsInput">ExcludedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.inputParametersInput">InputParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.maximumExecutionFrequencyInput">MaximumExecutionFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceIdScopeInput">ResourceIdScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceTypesScopeInput">ResourceTypesScopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.ruleIdentifierInput">RuleIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagKeyScopeInput">TagKeyScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagValueScopeInput">TagValueScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts">ConfigOrganizationManagedRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.excludedAccounts">ExcludedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.inputParameters">InputParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceIdScope">ResourceIdScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.ruleIdentifier">RuleIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagKeyScope">TagKeyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagValueScope">TagValueScope</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.timeouts"></a>

```csharp
public ConfigOrganizationManagedRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference">ConfigOrganizationManagedRuleTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExcludedAccountsInput`<sup>Optional</sup> <a name="ExcludedAccountsInput" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.excludedAccountsInput"></a>

```csharp
public string[] ExcludedAccountsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputParametersInput`<sup>Optional</sup> <a name="InputParametersInput" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.inputParametersInput"></a>

```csharp
public string InputParametersInput { get; }
```

- *Type:* string

---

##### `MaximumExecutionFrequencyInput`<sup>Optional</sup> <a name="MaximumExecutionFrequencyInput" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.maximumExecutionFrequencyInput"></a>

```csharp
public string MaximumExecutionFrequencyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceIdScopeInput`<sup>Optional</sup> <a name="ResourceIdScopeInput" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceIdScopeInput"></a>

```csharp
public string ResourceIdScopeInput { get; }
```

- *Type:* string

---

##### `ResourceTypesScopeInput`<sup>Optional</sup> <a name="ResourceTypesScopeInput" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceTypesScopeInput"></a>

```csharp
public string[] ResourceTypesScopeInput { get; }
```

- *Type:* string[]

---

##### `RuleIdentifierInput`<sup>Optional</sup> <a name="RuleIdentifierInput" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.ruleIdentifierInput"></a>

```csharp
public string RuleIdentifierInput { get; }
```

- *Type:* string

---

##### `TagKeyScopeInput`<sup>Optional</sup> <a name="TagKeyScopeInput" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagKeyScopeInput"></a>

```csharp
public string TagKeyScopeInput { get; }
```

- *Type:* string

---

##### `TagValueScopeInput`<sup>Optional</sup> <a name="TagValueScopeInput" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagValueScopeInput"></a>

```csharp
public string TagValueScopeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.timeoutsInput"></a>

```csharp
public IResolvable|ConfigOrganizationManagedRuleTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts">ConfigOrganizationManagedRuleTimeouts</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExcludedAccounts`<sup>Required</sup> <a name="ExcludedAccounts" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.excludedAccounts"></a>

```csharp
public string[] ExcludedAccounts { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.inputParameters"></a>

```csharp
public string InputParameters { get; }
```

- *Type:* string

---

##### `MaximumExecutionFrequency`<sup>Required</sup> <a name="MaximumExecutionFrequency" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.maximumExecutionFrequency"></a>

```csharp
public string MaximumExecutionFrequency { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceIdScope`<sup>Required</sup> <a name="ResourceIdScope" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceIdScope"></a>

```csharp
public string ResourceIdScope { get; }
```

- *Type:* string

---

##### `ResourceTypesScope`<sup>Required</sup> <a name="ResourceTypesScope" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceTypesScope"></a>

```csharp
public string[] ResourceTypesScope { get; }
```

- *Type:* string[]

---

##### `RuleIdentifier`<sup>Required</sup> <a name="RuleIdentifier" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.ruleIdentifier"></a>

```csharp
public string RuleIdentifier { get; }
```

- *Type:* string

---

##### `TagKeyScope`<sup>Required</sup> <a name="TagKeyScope" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagKeyScope"></a>

```csharp
public string TagKeyScope { get; }
```

- *Type:* string

---

##### `TagValueScope`<sup>Required</sup> <a name="TagValueScope" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagValueScope"></a>

```csharp
public string TagValueScope { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationManagedRuleConfig <a name="ConfigOrganizationManagedRuleConfig" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ConfigOrganizationManagedRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string RuleIdentifier,
    string Description = null,
    string[] ExcludedAccounts = null,
    string Id = null,
    string InputParameters = null,
    string MaximumExecutionFrequency = null,
    string Region = null,
    string ResourceIdScope = null,
    string[] ResourceTypesScope = null,
    string TagKeyScope = null,
    string TagValueScope = null,
    ConfigOrganizationManagedRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#name ConfigOrganizationManagedRule#name}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.ruleIdentifier">RuleIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#rule_identifier ConfigOrganizationManagedRule#rule_identifier}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#description ConfigOrganizationManagedRule#description}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.excludedAccounts">ExcludedAccounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#excluded_accounts ConfigOrganizationManagedRule#excluded_accounts}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#id ConfigOrganizationManagedRule#id}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.inputParameters">InputParameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#input_parameters ConfigOrganizationManagedRule#input_parameters}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#maximum_execution_frequency ConfigOrganizationManagedRule#maximum_execution_frequency}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.resourceIdScope">ResourceIdScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#resource_id_scope ConfigOrganizationManagedRule#resource_id_scope}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#resource_types_scope ConfigOrganizationManagedRule#resource_types_scope}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.tagKeyScope">TagKeyScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#tag_key_scope ConfigOrganizationManagedRule#tag_key_scope}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.tagValueScope">TagValueScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#tag_value_scope ConfigOrganizationManagedRule#tag_value_scope}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts">ConfigOrganizationManagedRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#name ConfigOrganizationManagedRule#name}.

---

##### `RuleIdentifier`<sup>Required</sup> <a name="RuleIdentifier" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.ruleIdentifier"></a>

```csharp
public string RuleIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#rule_identifier ConfigOrganizationManagedRule#rule_identifier}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#description ConfigOrganizationManagedRule#description}.

---

##### `ExcludedAccounts`<sup>Optional</sup> <a name="ExcludedAccounts" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.excludedAccounts"></a>

```csharp
public string[] ExcludedAccounts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#excluded_accounts ConfigOrganizationManagedRule#excluded_accounts}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#id ConfigOrganizationManagedRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputParameters`<sup>Optional</sup> <a name="InputParameters" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.inputParameters"></a>

```csharp
public string InputParameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#input_parameters ConfigOrganizationManagedRule#input_parameters}.

---

##### `MaximumExecutionFrequency`<sup>Optional</sup> <a name="MaximumExecutionFrequency" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.maximumExecutionFrequency"></a>

```csharp
public string MaximumExecutionFrequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#maximum_execution_frequency ConfigOrganizationManagedRule#maximum_execution_frequency}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#region ConfigOrganizationManagedRule#region}

---

##### `ResourceIdScope`<sup>Optional</sup> <a name="ResourceIdScope" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.resourceIdScope"></a>

```csharp
public string ResourceIdScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#resource_id_scope ConfigOrganizationManagedRule#resource_id_scope}.

---

##### `ResourceTypesScope`<sup>Optional</sup> <a name="ResourceTypesScope" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.resourceTypesScope"></a>

```csharp
public string[] ResourceTypesScope { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#resource_types_scope ConfigOrganizationManagedRule#resource_types_scope}.

---

##### `TagKeyScope`<sup>Optional</sup> <a name="TagKeyScope" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.tagKeyScope"></a>

```csharp
public string TagKeyScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#tag_key_scope ConfigOrganizationManagedRule#tag_key_scope}.

---

##### `TagValueScope`<sup>Optional</sup> <a name="TagValueScope" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.tagValueScope"></a>

```csharp
public string TagValueScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#tag_value_scope ConfigOrganizationManagedRule#tag_value_scope}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.timeouts"></a>

```csharp
public ConfigOrganizationManagedRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts">ConfigOrganizationManagedRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#timeouts ConfigOrganizationManagedRule#timeouts}

---

### ConfigOrganizationManagedRuleTimeouts <a name="ConfigOrganizationManagedRuleTimeouts" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ConfigOrganizationManagedRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#create ConfigOrganizationManagedRule#create}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#delete ConfigOrganizationManagedRule#delete}. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#update ConfigOrganizationManagedRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#create ConfigOrganizationManagedRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#delete ConfigOrganizationManagedRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/config_organization_managed_rule#update ConfigOrganizationManagedRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationManagedRuleTimeoutsOutputReference <a name="ConfigOrganizationManagedRuleTimeoutsOutputReference" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ConfigOrganizationManagedRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts">ConfigOrganizationManagedRuleTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConfigOrganizationManagedRuleTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts">ConfigOrganizationManagedRuleTimeouts</a>

---



