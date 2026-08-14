# `configConfigRule` Submodule <a name="`configConfigRule` Submodule" id="@cdktn/provider-aws.configConfigRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConfigRule <a name="ConfigConfigRule" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule aws_config_config_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ConfigConfigRule(Construct Scope, string Id, ConfigConfigRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig">ConfigConfigRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig">ConfigConfigRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.putEvaluationMode">PutEvaluationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.resetEvaluationMode">ResetEvaluationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.resetInputParameters">ResetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.resetMaximumExecutionFrequency">ResetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEvaluationMode` <a name="PutEvaluationMode" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.putEvaluationMode"></a>

```csharp
private void PutEvaluationMode(IResolvable|ConfigConfigRuleEvaluationMode[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.putEvaluationMode.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationMode">ConfigConfigRuleEvaluationMode</a>[]

---

##### `PutScope` <a name="PutScope" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.putScope"></a>

```csharp
private void PutScope(ConfigConfigRuleScope Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.putSource"></a>

```csharp
private void PutSource(ConfigConfigRuleSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEvaluationMode` <a name="ResetEvaluationMode" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.resetEvaluationMode"></a>

```csharp
private void ResetEvaluationMode()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInputParameters` <a name="ResetInputParameters" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.resetInputParameters"></a>

```csharp
private void ResetInputParameters()
```

##### `ResetMaximumExecutionFrequency` <a name="ResetMaximumExecutionFrequency" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.resetMaximumExecutionFrequency"></a>

```csharp
private void ResetMaximumExecutionFrequency()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigConfigRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ConfigConfigRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ConfigConfigRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ConfigConfigRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ConfigConfigRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConfigConfigRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigConfigRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigConfigRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConfigConfigRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.evaluationMode">EvaluationMode</a></code> | <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList">ConfigConfigRuleEvaluationModeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference">ConfigConfigRuleScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.source">Source</a></code> | <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference">ConfigConfigRuleSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.evaluationModeInput">EvaluationModeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationMode">ConfigConfigRuleEvaluationMode</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.inputParametersInput">InputParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequencyInput">MaximumExecutionFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.scopeInput">ScopeInput</a></code> | <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.inputParameters">InputParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EvaluationMode`<sup>Required</sup> <a name="EvaluationMode" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.evaluationMode"></a>

```csharp
public ConfigConfigRuleEvaluationModeList EvaluationMode { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList">ConfigConfigRuleEvaluationModeList</a>

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.scope"></a>

```csharp
public ConfigConfigRuleScopeOutputReference Scope { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference">ConfigConfigRuleScopeOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.source"></a>

```csharp
public ConfigConfigRuleSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference">ConfigConfigRuleSourceOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EvaluationModeInput`<sup>Optional</sup> <a name="EvaluationModeInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.evaluationModeInput"></a>

```csharp
public IResolvable|ConfigConfigRuleEvaluationMode[] EvaluationModeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationMode">ConfigConfigRuleEvaluationMode</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputParametersInput`<sup>Optional</sup> <a name="InputParametersInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.inputParametersInput"></a>

```csharp
public string InputParametersInput { get; }
```

- *Type:* string

---

##### `MaximumExecutionFrequencyInput`<sup>Optional</sup> <a name="MaximumExecutionFrequencyInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequencyInput"></a>

```csharp
public string MaximumExecutionFrequencyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.scopeInput"></a>

```csharp
public ConfigConfigRuleScope ScopeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.sourceInput"></a>

```csharp
public ConfigConfigRuleSource SourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.inputParameters"></a>

```csharp
public string InputParameters { get; }
```

- *Type:* string

---

##### `MaximumExecutionFrequency`<sup>Required</sup> <a name="MaximumExecutionFrequency" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequency"></a>

```csharp
public string MaximumExecutionFrequency { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConfigRuleConfig <a name="ConfigConfigRuleConfig" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ConfigConfigRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    ConfigConfigRuleSource Source,
    string Description = null,
    IResolvable|ConfigConfigRuleEvaluationMode[] EvaluationMode = null,
    string Id = null,
    string InputParameters = null,
    string MaximumExecutionFrequency = null,
    string Region = null,
    ConfigConfigRuleScope Scope = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#name ConfigConfigRule#name}. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.source">Source</a></code> | <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#description ConfigConfigRule#description}. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.evaluationMode">EvaluationMode</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationMode">ConfigConfigRuleEvaluationMode</a>[]</code> | evaluation_mode block. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#id ConfigConfigRule#id}. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.inputParameters">InputParameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#input_parameters ConfigConfigRule#input_parameters}. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#tags ConfigConfigRule#tags}. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#tags_all ConfigConfigRule#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#name ConfigConfigRule#name}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.source"></a>

```csharp
public ConfigConfigRuleSource Source { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#source ConfigConfigRule#source}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#description ConfigConfigRule#description}.

---

##### `EvaluationMode`<sup>Optional</sup> <a name="EvaluationMode" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.evaluationMode"></a>

```csharp
public IResolvable|ConfigConfigRuleEvaluationMode[] EvaluationMode { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationMode">ConfigConfigRuleEvaluationMode</a>[]

evaluation_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#evaluation_mode ConfigConfigRule#evaluation_mode}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#id ConfigConfigRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputParameters`<sup>Optional</sup> <a name="InputParameters" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.inputParameters"></a>

```csharp
public string InputParameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#input_parameters ConfigConfigRule#input_parameters}.

---

##### `MaximumExecutionFrequency`<sup>Optional</sup> <a name="MaximumExecutionFrequency" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.maximumExecutionFrequency"></a>

```csharp
public string MaximumExecutionFrequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#region ConfigConfigRule#region}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.scope"></a>

```csharp
public ConfigConfigRuleScope Scope { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#scope ConfigConfigRule#scope}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#tags ConfigConfigRule#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#tags_all ConfigConfigRule#tags_all}.

---

### ConfigConfigRuleEvaluationMode <a name="ConfigConfigRuleEvaluationMode" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationMode.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ConfigConfigRuleEvaluationMode {
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationMode.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#mode ConfigConfigRule#mode}. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationMode.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#mode ConfigConfigRule#mode}.

---

### ConfigConfigRuleScope <a name="ConfigConfigRuleScope" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ConfigConfigRuleScope {
    string ComplianceResourceId = null,
    string[] ComplianceResourceTypes = null,
    string TagKey = null,
    string TagValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScope.property.complianceResourceId">ComplianceResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#compliance_resource_id ConfigConfigRule#compliance_resource_id}. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScope.property.complianceResourceTypes">ComplianceResourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#compliance_resource_types ConfigConfigRule#compliance_resource_types}. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScope.property.tagKey">TagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#tag_key ConfigConfigRule#tag_key}. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScope.property.tagValue">TagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#tag_value ConfigConfigRule#tag_value}. |

---

##### `ComplianceResourceId`<sup>Optional</sup> <a name="ComplianceResourceId" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScope.property.complianceResourceId"></a>

```csharp
public string ComplianceResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#compliance_resource_id ConfigConfigRule#compliance_resource_id}.

---

##### `ComplianceResourceTypes`<sup>Optional</sup> <a name="ComplianceResourceTypes" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScope.property.complianceResourceTypes"></a>

```csharp
public string[] ComplianceResourceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#compliance_resource_types ConfigConfigRule#compliance_resource_types}.

---

##### `TagKey`<sup>Optional</sup> <a name="TagKey" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScope.property.tagKey"></a>

```csharp
public string TagKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#tag_key ConfigConfigRule#tag_key}.

---

##### `TagValue`<sup>Optional</sup> <a name="TagValue" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScope.property.tagValue"></a>

```csharp
public string TagValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#tag_value ConfigConfigRule#tag_value}.

---

### ConfigConfigRuleSource <a name="ConfigConfigRuleSource" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ConfigConfigRuleSource {
    string Owner,
    ConfigConfigRuleSourceCustomPolicyDetails CustomPolicyDetails = null,
    IResolvable|ConfigConfigRuleSourceSourceDetail[] SourceDetail = null,
    string SourceIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSource.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#owner ConfigConfigRule#owner}. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSource.property.customPolicyDetails">CustomPolicyDetails</a></code> | <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a></code> | custom_policy_details block. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSource.property.sourceDetail">SourceDetail</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail">ConfigConfigRuleSourceSourceDetail</a>[]</code> | source_detail block. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSource.property.sourceIdentifier">SourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#source_identifier ConfigConfigRule#source_identifier}. |

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSource.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#owner ConfigConfigRule#owner}.

---

##### `CustomPolicyDetails`<sup>Optional</sup> <a name="CustomPolicyDetails" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSource.property.customPolicyDetails"></a>

```csharp
public ConfigConfigRuleSourceCustomPolicyDetails CustomPolicyDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

custom_policy_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#custom_policy_details ConfigConfigRule#custom_policy_details}

---

##### `SourceDetail`<sup>Optional</sup> <a name="SourceDetail" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSource.property.sourceDetail"></a>

```csharp
public IResolvable|ConfigConfigRuleSourceSourceDetail[] SourceDetail { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail">ConfigConfigRuleSourceSourceDetail</a>[]

source_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#source_detail ConfigConfigRule#source_detail}

---

##### `SourceIdentifier`<sup>Optional</sup> <a name="SourceIdentifier" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSource.property.sourceIdentifier"></a>

```csharp
public string SourceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#source_identifier ConfigConfigRule#source_identifier}.

---

### ConfigConfigRuleSourceCustomPolicyDetails <a name="ConfigConfigRuleSourceCustomPolicyDetails" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ConfigConfigRuleSourceCustomPolicyDetails {
    string PolicyRuntime,
    string PolicyText,
    bool|IResolvable EnableDebugLogDelivery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyRuntime">PolicyRuntime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#policy_runtime ConfigConfigRule#policy_runtime}. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyText">PolicyText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#policy_text ConfigConfigRule#policy_text}. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.enableDebugLogDelivery">EnableDebugLogDelivery</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#enable_debug_log_delivery ConfigConfigRule#enable_debug_log_delivery}. |

---

##### `PolicyRuntime`<sup>Required</sup> <a name="PolicyRuntime" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyRuntime"></a>

```csharp
public string PolicyRuntime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#policy_runtime ConfigConfigRule#policy_runtime}.

---

##### `PolicyText`<sup>Required</sup> <a name="PolicyText" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyText"></a>

```csharp
public string PolicyText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#policy_text ConfigConfigRule#policy_text}.

---

##### `EnableDebugLogDelivery`<sup>Optional</sup> <a name="EnableDebugLogDelivery" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.enableDebugLogDelivery"></a>

```csharp
public bool|IResolvable EnableDebugLogDelivery { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#enable_debug_log_delivery ConfigConfigRule#enable_debug_log_delivery}.

---

### ConfigConfigRuleSourceSourceDetail <a name="ConfigConfigRuleSourceSourceDetail" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ConfigConfigRuleSourceSourceDetail {
    string EventSource = null,
    string MaximumExecutionFrequency = null,
    string MessageType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.eventSource">EventSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#event_source ConfigConfigRule#event_source}. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.messageType">MessageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#message_type ConfigConfigRule#message_type}. |

---

##### `EventSource`<sup>Optional</sup> <a name="EventSource" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.eventSource"></a>

```csharp
public string EventSource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#event_source ConfigConfigRule#event_source}.

---

##### `MaximumExecutionFrequency`<sup>Optional</sup> <a name="MaximumExecutionFrequency" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.maximumExecutionFrequency"></a>

```csharp
public string MaximumExecutionFrequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}.

---

##### `MessageType`<sup>Optional</sup> <a name="MessageType" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.messageType"></a>

```csharp
public string MessageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/config_config_rule#message_type ConfigConfigRule#message_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigConfigRuleEvaluationModeList <a name="ConfigConfigRuleEvaluationModeList" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ConfigConfigRuleEvaluationModeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.get"></a>

```csharp
private ConfigConfigRuleEvaluationModeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationMode">ConfigConfigRuleEvaluationMode</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeList.property.internalValue"></a>

```csharp
public IResolvable|ConfigConfigRuleEvaluationMode[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationMode">ConfigConfigRuleEvaluationMode</a>[]

---


### ConfigConfigRuleEvaluationModeOutputReference <a name="ConfigConfigRuleEvaluationModeOutputReference" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ConfigConfigRuleEvaluationModeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationMode">ConfigConfigRuleEvaluationMode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationModeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConfigConfigRuleEvaluationMode InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleEvaluationMode">ConfigConfigRuleEvaluationMode</a>

---


### ConfigConfigRuleScopeOutputReference <a name="ConfigConfigRuleScopeOutputReference" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ConfigConfigRuleScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceId">ResetComplianceResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceTypes">ResetComplianceResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagKey">ResetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagValue">ResetTagValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComplianceResourceId` <a name="ResetComplianceResourceId" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceId"></a>

```csharp
private void ResetComplianceResourceId()
```

##### `ResetComplianceResourceTypes` <a name="ResetComplianceResourceTypes" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceTypes"></a>

```csharp
private void ResetComplianceResourceTypes()
```

##### `ResetTagKey` <a name="ResetTagKey" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagKey"></a>

```csharp
private void ResetTagKey()
```

##### `ResetTagValue` <a name="ResetTagValue" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagValue"></a>

```csharp
private void ResetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceIdInput">ComplianceResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypesInput">ComplianceResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValueInput">TagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceId">ComplianceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypes">ComplianceResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValue">TagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComplianceResourceIdInput`<sup>Optional</sup> <a name="ComplianceResourceIdInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceIdInput"></a>

```csharp
public string ComplianceResourceIdInput { get; }
```

- *Type:* string

---

##### `ComplianceResourceTypesInput`<sup>Optional</sup> <a name="ComplianceResourceTypesInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypesInput"></a>

```csharp
public string[] ComplianceResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKeyInput"></a>

```csharp
public string TagKeyInput { get; }
```

- *Type:* string

---

##### `TagValueInput`<sup>Optional</sup> <a name="TagValueInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValueInput"></a>

```csharp
public string TagValueInput { get; }
```

- *Type:* string

---

##### `ComplianceResourceId`<sup>Required</sup> <a name="ComplianceResourceId" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceId"></a>

```csharp
public string ComplianceResourceId { get; }
```

- *Type:* string

---

##### `ComplianceResourceTypes`<sup>Required</sup> <a name="ComplianceResourceTypes" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypes"></a>

```csharp
public string[] ComplianceResourceTypes { get; }
```

- *Type:* string[]

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValue"></a>

```csharp
public string TagValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.internalValue"></a>

```csharp
public ConfigConfigRuleScope InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

---


### ConfigConfigRuleSourceCustomPolicyDetailsOutputReference <a name="ConfigConfigRuleSourceCustomPolicyDetailsOutputReference" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ConfigConfigRuleSourceCustomPolicyDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetEnableDebugLogDelivery">ResetEnableDebugLogDelivery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableDebugLogDelivery` <a name="ResetEnableDebugLogDelivery" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetEnableDebugLogDelivery"></a>

```csharp
private void ResetEnableDebugLogDelivery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDeliveryInput">EnableDebugLogDeliveryInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntimeInput">PolicyRuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyTextInput">PolicyTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDelivery">EnableDebugLogDelivery</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntime">PolicyRuntime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyText">PolicyText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableDebugLogDeliveryInput`<sup>Optional</sup> <a name="EnableDebugLogDeliveryInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDeliveryInput"></a>

```csharp
public bool|IResolvable EnableDebugLogDeliveryInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PolicyRuntimeInput`<sup>Optional</sup> <a name="PolicyRuntimeInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntimeInput"></a>

```csharp
public string PolicyRuntimeInput { get; }
```

- *Type:* string

---

##### `PolicyTextInput`<sup>Optional</sup> <a name="PolicyTextInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyTextInput"></a>

```csharp
public string PolicyTextInput { get; }
```

- *Type:* string

---

##### `EnableDebugLogDelivery`<sup>Required</sup> <a name="EnableDebugLogDelivery" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDelivery"></a>

```csharp
public bool|IResolvable EnableDebugLogDelivery { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PolicyRuntime`<sup>Required</sup> <a name="PolicyRuntime" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntime"></a>

```csharp
public string PolicyRuntime { get; }
```

- *Type:* string

---

##### `PolicyText`<sup>Required</sup> <a name="PolicyText" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyText"></a>

```csharp
public string PolicyText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.internalValue"></a>

```csharp
public ConfigConfigRuleSourceCustomPolicyDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

---


### ConfigConfigRuleSourceOutputReference <a name="ConfigConfigRuleSourceOutputReference" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ConfigConfigRuleSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails">PutCustomPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putSourceDetail">PutSourceDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetCustomPolicyDetails">ResetCustomPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceDetail">ResetSourceDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceIdentifier">ResetSourceIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomPolicyDetails` <a name="PutCustomPolicyDetails" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails"></a>

```csharp
private void PutCustomPolicyDetails(ConfigConfigRuleSourceCustomPolicyDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

---

##### `PutSourceDetail` <a name="PutSourceDetail" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putSourceDetail"></a>

```csharp
private void PutSourceDetail(IResolvable|ConfigConfigRuleSourceSourceDetail[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putSourceDetail.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail">ConfigConfigRuleSourceSourceDetail</a>[]

---

##### `ResetCustomPolicyDetails` <a name="ResetCustomPolicyDetails" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetCustomPolicyDetails"></a>

```csharp
private void ResetCustomPolicyDetails()
```

##### `ResetSourceDetail` <a name="ResetSourceDetail" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceDetail"></a>

```csharp
private void ResetSourceDetail()
```

##### `ResetSourceIdentifier` <a name="ResetSourceIdentifier" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceIdentifier"></a>

```csharp
private void ResetSourceIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetails">CustomPolicyDetails</a></code> | <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference">ConfigConfigRuleSourceCustomPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetail">SourceDetail</a></code> | <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList">ConfigConfigRuleSourceSourceDetailList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetailsInput">CustomPolicyDetailsInput</a></code> | <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetailInput">SourceDetailInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail">ConfigConfigRuleSourceSourceDetail</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifierInput">SourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifier">SourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomPolicyDetails`<sup>Required</sup> <a name="CustomPolicyDetails" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetails"></a>

```csharp
public ConfigConfigRuleSourceCustomPolicyDetailsOutputReference CustomPolicyDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference">ConfigConfigRuleSourceCustomPolicyDetailsOutputReference</a>

---

##### `SourceDetail`<sup>Required</sup> <a name="SourceDetail" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetail"></a>

```csharp
public ConfigConfigRuleSourceSourceDetailList SourceDetail { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList">ConfigConfigRuleSourceSourceDetailList</a>

---

##### `CustomPolicyDetailsInput`<sup>Optional</sup> <a name="CustomPolicyDetailsInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetailsInput"></a>

```csharp
public ConfigConfigRuleSourceCustomPolicyDetails CustomPolicyDetailsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `SourceDetailInput`<sup>Optional</sup> <a name="SourceDetailInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetailInput"></a>

```csharp
public IResolvable|ConfigConfigRuleSourceSourceDetail[] SourceDetailInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail">ConfigConfigRuleSourceSourceDetail</a>[]

---

##### `SourceIdentifierInput`<sup>Optional</sup> <a name="SourceIdentifierInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifierInput"></a>

```csharp
public string SourceIdentifierInput { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `SourceIdentifier`<sup>Required</sup> <a name="SourceIdentifier" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifier"></a>

```csharp
public string SourceIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.internalValue"></a>

```csharp
public ConfigConfigRuleSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

---


### ConfigConfigRuleSourceSourceDetailList <a name="ConfigConfigRuleSourceSourceDetailList" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ConfigConfigRuleSourceSourceDetailList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.get"></a>

```csharp
private ConfigConfigRuleSourceSourceDetailOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail">ConfigConfigRuleSourceSourceDetail</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.internalValue"></a>

```csharp
public IResolvable|ConfigConfigRuleSourceSourceDetail[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail">ConfigConfigRuleSourceSourceDetail</a>[]

---


### ConfigConfigRuleSourceSourceDetailOutputReference <a name="ConfigConfigRuleSourceSourceDetailOutputReference" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ConfigConfigRuleSourceSourceDetailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetEventSource">ResetEventSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetMaximumExecutionFrequency">ResetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetMessageType">ResetMessageType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventSource` <a name="ResetEventSource" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetEventSource"></a>

```csharp
private void ResetEventSource()
```

##### `ResetMaximumExecutionFrequency` <a name="ResetMaximumExecutionFrequency" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetMaximumExecutionFrequency"></a>

```csharp
private void ResetMaximumExecutionFrequency()
```

##### `ResetMessageType` <a name="ResetMessageType" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetMessageType"></a>

```csharp
private void ResetMessageType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.eventSourceInput">EventSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.maximumExecutionFrequencyInput">MaximumExecutionFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.messageTypeInput">MessageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.eventSource">EventSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.messageType">MessageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail">ConfigConfigRuleSourceSourceDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventSourceInput`<sup>Optional</sup> <a name="EventSourceInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.eventSourceInput"></a>

```csharp
public string EventSourceInput { get; }
```

- *Type:* string

---

##### `MaximumExecutionFrequencyInput`<sup>Optional</sup> <a name="MaximumExecutionFrequencyInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.maximumExecutionFrequencyInput"></a>

```csharp
public string MaximumExecutionFrequencyInput { get; }
```

- *Type:* string

---

##### `MessageTypeInput`<sup>Optional</sup> <a name="MessageTypeInput" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.messageTypeInput"></a>

```csharp
public string MessageTypeInput { get; }
```

- *Type:* string

---

##### `EventSource`<sup>Required</sup> <a name="EventSource" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.eventSource"></a>

```csharp
public string EventSource { get; }
```

- *Type:* string

---

##### `MaximumExecutionFrequency`<sup>Required</sup> <a name="MaximumExecutionFrequency" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.maximumExecutionFrequency"></a>

```csharp
public string MaximumExecutionFrequency { get; }
```

- *Type:* string

---

##### `MessageType`<sup>Required</sup> <a name="MessageType" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.messageType"></a>

```csharp
public string MessageType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConfigConfigRuleSourceSourceDetail InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail">ConfigConfigRuleSourceSourceDetail</a>

---



