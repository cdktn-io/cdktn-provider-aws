# `bedrockagentcoreCodeInterpreter` Submodule <a name="`bedrockagentcoreCodeInterpreter` Submodule" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreCodeInterpreter <a name="BedrockagentcoreCodeInterpreter" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_code_interpreter aws_bedrockagentcore_code_interpreter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreCodeInterpreter(Construct Scope, string Id, BedrockagentcoreCodeInterpreterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig">BedrockagentcoreCodeInterpreterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig">BedrockagentcoreCodeInterpreterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putNetworkConfiguration"></a>

```csharp
private void PutNetworkConfiguration(IResolvable|BedrockagentcoreCodeInterpreterNetworkConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putNetworkConfiguration.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putTimeouts"></a>

```csharp
private void PutTimeouts(BedrockagentcoreCodeInterpreterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetExecutionRoleArn"></a>

```csharp
private void ResetExecutionRoleArn()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetNetworkConfiguration"></a>

```csharp
private void ResetNetworkConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentcoreCodeInterpreter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreCodeInterpreter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreCodeInterpreter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreCodeInterpreter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreCodeInterpreter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BedrockagentcoreCodeInterpreter resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreCodeInterpreter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreCodeInterpreter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_code_interpreter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreCodeInterpreter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.codeInterpreterArn">CodeInterpreterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.codeInterpreterId">CodeInterpreterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList">BedrockagentcoreCodeInterpreterNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference">BedrockagentcoreCodeInterpreterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CodeInterpreterArn`<sup>Required</sup> <a name="CodeInterpreterArn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.codeInterpreterArn"></a>

```csharp
public string CodeInterpreterArn { get; }
```

- *Type:* string

---

##### `CodeInterpreterId`<sup>Required</sup> <a name="CodeInterpreterId" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.codeInterpreterId"></a>

```csharp
public string CodeInterpreterId { get; }
```

- *Type:* string

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.networkConfiguration"></a>

```csharp
public BedrockagentcoreCodeInterpreterNetworkConfigurationList NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList">BedrockagentcoreCodeInterpreterNetworkConfigurationList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.timeouts"></a>

```csharp
public BedrockagentcoreCodeInterpreterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference">BedrockagentcoreCodeInterpreterTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.executionRoleArnInput"></a>

```csharp
public string ExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.networkConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcoreCodeInterpreterNetworkConfiguration[] NetworkConfigurationInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.timeoutsInput"></a>

```csharp
public IResolvable|BedrockagentcoreCodeInterpreterTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreCodeInterpreterConfig <a name="BedrockagentcoreCodeInterpreterConfig" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreCodeInterpreterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Description = null,
    string ExecutionRoleArn = null,
    IResolvable|BedrockagentcoreCodeInterpreterNetworkConfiguration[] NetworkConfiguration = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    BedrockagentcoreCodeInterpreterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_code_interpreter#name BedrockagentcoreCodeInterpreter#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_code_interpreter#description BedrockagentcoreCodeInterpreter#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_code_interpreter#execution_role_arn BedrockagentcoreCodeInterpreter#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>[]</code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_code_interpreter#tags BedrockagentcoreCodeInterpreter#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_code_interpreter#name BedrockagentcoreCodeInterpreter#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_code_interpreter#description BedrockagentcoreCodeInterpreter#description}.

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_code_interpreter#execution_role_arn BedrockagentcoreCodeInterpreter#execution_role_arn}.

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.networkConfiguration"></a>

```csharp
public IResolvable|BedrockagentcoreCodeInterpreterNetworkConfiguration[] NetworkConfiguration { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>[]

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_code_interpreter#network_configuration BedrockagentcoreCodeInterpreter#network_configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_code_interpreter#region BedrockagentcoreCodeInterpreter#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_code_interpreter#tags BedrockagentcoreCodeInterpreter#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterConfig.property.timeouts"></a>

```csharp
public BedrockagentcoreCodeInterpreterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_code_interpreter#timeouts BedrockagentcoreCodeInterpreter#timeouts}

---

### BedrockagentcoreCodeInterpreterNetworkConfiguration <a name="BedrockagentcoreCodeInterpreterNetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreCodeInterpreterNetworkConfiguration {
    string NetworkMode,
    IResolvable|BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig[] VpcConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration.property.networkMode">NetworkMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_code_interpreter#network_mode BedrockagentcoreCodeInterpreter#network_mode}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration.property.vpcConfig">VpcConfig</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>[]</code> | vpc_config block. |

---

##### `NetworkMode`<sup>Required</sup> <a name="NetworkMode" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration.property.networkMode"></a>

```csharp
public string NetworkMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_code_interpreter#network_mode BedrockagentcoreCodeInterpreter#network_mode}.

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration.property.vpcConfig"></a>

```csharp
public IResolvable|BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig[] VpcConfig { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>[]

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_code_interpreter#vpc_config BedrockagentcoreCodeInterpreter#vpc_config}

---

### BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig <a name="BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig {
    string[] SecurityGroups,
    string[] Subnets
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_code_interpreter#security_groups BedrockagentcoreCodeInterpreter#security_groups}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig.property.subnets">Subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_code_interpreter#subnets BedrockagentcoreCodeInterpreter#subnets}. |

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_code_interpreter#security_groups BedrockagentcoreCodeInterpreter#security_groups}.

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_code_interpreter#subnets BedrockagentcoreCodeInterpreter#subnets}.

---

### BedrockagentcoreCodeInterpreterTimeouts <a name="BedrockagentcoreCodeInterpreterTimeouts" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreCodeInterpreterTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_code_interpreter#create BedrockagentcoreCodeInterpreter#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/bedrockagentcore_code_interpreter#delete BedrockagentcoreCodeInterpreter#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreCodeInterpreterNetworkConfigurationList <a name="BedrockagentcoreCodeInterpreterNetworkConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreCodeInterpreterNetworkConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.get"></a>

```csharp
private BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreCodeInterpreterNetworkConfiguration[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>[]

---


### BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference <a name="BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.putVpcConfig"></a>

```csharp
private void PutVpcConfig(IResolvable|BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>[]

---

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.resetVpcConfig"></a>

```csharp
private void ResetVpcConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.networkModeInput">NetworkModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.vpcConfigInput">VpcConfigInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.networkMode">NetworkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.vpcConfig"></a>

```csharp
public BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList VpcConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList</a>

---

##### `NetworkModeInput`<sup>Optional</sup> <a name="NetworkModeInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.networkModeInput"></a>

```csharp
public string NetworkModeInput { get; }
```

- *Type:* string

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.vpcConfigInput"></a>

```csharp
public IResolvable|BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig[] VpcConfigInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>[]

---

##### `NetworkMode`<sup>Required</sup> <a name="NetworkMode" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.networkMode"></a>

```csharp
public string NetworkMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreCodeInterpreterNetworkConfiguration InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfiguration">BedrockagentcoreCodeInterpreterNetworkConfiguration</a>

---


### BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList <a name="BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.get"></a>

```csharp
private BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>[]

---


### BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference <a name="BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterNetworkConfigurationVpcConfig</a>

---


### BedrockagentcoreCodeInterpreterTimeoutsOutputReference <a name="BedrockagentcoreCodeInterpreterTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreCodeInterpreterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreCodeInterpreterTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreCodeInterpreter.BedrockagentcoreCodeInterpreterTimeouts">BedrockagentcoreCodeInterpreterTimeouts</a>

---



