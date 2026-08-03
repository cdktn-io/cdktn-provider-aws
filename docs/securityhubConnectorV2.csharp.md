# `securityhubConnectorV2` Submodule <a name="`securityhubConnectorV2` Submodule" id="@cdktn/provider-aws.securityhubConnectorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubConnectorV2 <a name="SecurityhubConnectorV2" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/securityhub_connector_v2 aws_securityhub_connector_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubConnectorV2(Construct Scope, string Id, SecurityhubConnectorV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config">SecurityhubConnectorV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config">SecurityhubConnectorV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.putConnectorProvider">PutConnectorProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetConnectorProvider">ResetConnectorProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectorProvider` <a name="PutConnectorProvider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.putConnectorProvider"></a>

```csharp
private void PutConnectorProvider(IResolvable|SecurityhubConnectorV2ConnectorProvider[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.putConnectorProvider.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>[]

---

##### `ResetConnectorProvider` <a name="ResetConnectorProvider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetConnectorProvider"></a>

```csharp
private void ResetConnectorProvider()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubConnectorV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SecurityhubConnectorV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SecurityhubConnectorV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SecurityhubConnectorV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SecurityhubConnectorV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecurityhubConnectorV2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityhubConnectorV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityhubConnectorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/securityhub_connector_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubConnectorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorId">ConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorProvider">ConnectorProvider</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList">SecurityhubConnectorV2ConnectorProviderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.health">Health</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList">SecurityhubConnectorV2HealthList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorProviderInput">ConnectorProviderInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ConnectorId`<sup>Required</sup> <a name="ConnectorId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorId"></a>

```csharp
public string ConnectorId { get; }
```

- *Type:* string

---

##### `ConnectorProvider`<sup>Required</sup> <a name="ConnectorProvider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorProvider"></a>

```csharp
public SecurityhubConnectorV2ConnectorProviderList ConnectorProvider { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList">SecurityhubConnectorV2ConnectorProviderList</a>

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.health"></a>

```csharp
public SecurityhubConnectorV2HealthList Health { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList">SecurityhubConnectorV2HealthList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `ConnectorProviderInput`<sup>Optional</sup> <a name="ConnectorProviderInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorProviderInput"></a>

```csharp
public IResolvable|SecurityhubConnectorV2ConnectorProvider[] ConnectorProviderInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubConnectorV2Config <a name="SecurityhubConnectorV2Config" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubConnectorV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    IResolvable|SecurityhubConnectorV2ConnectorProvider[] ConnectorProvider = null,
    string Description = null,
    string KmsKeyArn = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/securityhub_connector_v2#name SecurityhubConnectorV2#name}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connectorProvider">ConnectorProvider</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>[]</code> | connector_provider block. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/securityhub_connector_v2#description SecurityhubConnectorV2#description}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/securityhub_connector_v2#kms_key_arn SecurityhubConnectorV2#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/securityhub_connector_v2#tags SecurityhubConnectorV2#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/securityhub_connector_v2#name SecurityhubConnectorV2#name}.

---

##### `ConnectorProvider`<sup>Optional</sup> <a name="ConnectorProvider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connectorProvider"></a>

```csharp
public IResolvable|SecurityhubConnectorV2ConnectorProvider[] ConnectorProvider { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>[]

connector_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/securityhub_connector_v2#connector_provider SecurityhubConnectorV2#connector_provider}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/securityhub_connector_v2#description SecurityhubConnectorV2#description}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/securityhub_connector_v2#kms_key_arn SecurityhubConnectorV2#kms_key_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/securityhub_connector_v2#region SecurityhubConnectorV2#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/securityhub_connector_v2#tags SecurityhubConnectorV2#tags}.

---

### SecurityhubConnectorV2ConnectorProvider <a name="SecurityhubConnectorV2ConnectorProvider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubConnectorV2ConnectorProvider {
    IResolvable|SecurityhubConnectorV2ConnectorProviderJiraCloud[] JiraCloud = null,
    IResolvable|SecurityhubConnectorV2ConnectorProviderServiceNow[] ServiceNow = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.property.jiraCloud">JiraCloud</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>[]</code> | jira_cloud block. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.property.serviceNow">ServiceNow</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>[]</code> | service_now block. |

---

##### `JiraCloud`<sup>Optional</sup> <a name="JiraCloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.property.jiraCloud"></a>

```csharp
public IResolvable|SecurityhubConnectorV2ConnectorProviderJiraCloud[] JiraCloud { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>[]

jira_cloud block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/securityhub_connector_v2#jira_cloud SecurityhubConnectorV2#jira_cloud}

---

##### `ServiceNow`<sup>Optional</sup> <a name="ServiceNow" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.property.serviceNow"></a>

```csharp
public IResolvable|SecurityhubConnectorV2ConnectorProviderServiceNow[] ServiceNow { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>[]

service_now block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/securityhub_connector_v2#service_now SecurityhubConnectorV2#service_now}

---

### SecurityhubConnectorV2ConnectorProviderJiraCloud <a name="SecurityhubConnectorV2ConnectorProviderJiraCloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubConnectorV2ConnectorProviderJiraCloud {
    string ProjectKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud.property.projectKey">ProjectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/securityhub_connector_v2#project_key SecurityhubConnectorV2#project_key}. |

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud.property.projectKey"></a>

```csharp
public string ProjectKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/securityhub_connector_v2#project_key SecurityhubConnectorV2#project_key}.

---

### SecurityhubConnectorV2ConnectorProviderServiceNow <a name="SecurityhubConnectorV2ConnectorProviderServiceNow" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubConnectorV2ConnectorProviderServiceNow {
    string InstanceName,
    string SecretArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.property.instanceName">InstanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/securityhub_connector_v2#instance_name SecurityhubConnectorV2#instance_name}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.property.secretArn">SecretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/securityhub_connector_v2#secret_arn SecurityhubConnectorV2#secret_arn}. |

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.property.instanceName"></a>

```csharp
public string InstanceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/securityhub_connector_v2#instance_name SecurityhubConnectorV2#instance_name}.

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/securityhub_connector_v2#secret_arn SecurityhubConnectorV2#secret_arn}.

---

### SecurityhubConnectorV2Health <a name="SecurityhubConnectorV2Health" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Health"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Health.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubConnectorV2Health {

};
```


## Classes <a name="Classes" id="Classes"></a>

### SecurityhubConnectorV2ConnectorProviderJiraCloudList <a name="SecurityhubConnectorV2ConnectorProviderJiraCloudList" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubConnectorV2ConnectorProviderJiraCloudList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.get"></a>

```csharp
private SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubConnectorV2ConnectorProviderJiraCloud[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>[]

---


### SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference <a name="SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.authStatus">AuthStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.authUrl">AuthUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.cloudId">CloudId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.projectKeyInput">ProjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.projectKey">ProjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthStatus`<sup>Required</sup> <a name="AuthStatus" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.authStatus"></a>

```csharp
public string AuthStatus { get; }
```

- *Type:* string

---

##### `AuthUrl`<sup>Required</sup> <a name="AuthUrl" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.authUrl"></a>

```csharp
public string AuthUrl { get; }
```

- *Type:* string

---

##### `CloudId`<sup>Required</sup> <a name="CloudId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.cloudId"></a>

```csharp
public string CloudId { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.projectKeyInput"></a>

```csharp
public string ProjectKeyInput { get; }
```

- *Type:* string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.projectKey"></a>

```csharp
public string ProjectKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubConnectorV2ConnectorProviderJiraCloud InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>

---


### SecurityhubConnectorV2ConnectorProviderList <a name="SecurityhubConnectorV2ConnectorProviderList" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubConnectorV2ConnectorProviderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.get"></a>

```csharp
private SecurityhubConnectorV2ConnectorProviderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubConnectorV2ConnectorProvider[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>[]

---


### SecurityhubConnectorV2ConnectorProviderOutputReference <a name="SecurityhubConnectorV2ConnectorProviderOutputReference" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubConnectorV2ConnectorProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putJiraCloud">PutJiraCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putServiceNow">PutServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resetJiraCloud">ResetJiraCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resetServiceNow">ResetServiceNow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJiraCloud` <a name="PutJiraCloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putJiraCloud"></a>

```csharp
private void PutJiraCloud(IResolvable|SecurityhubConnectorV2ConnectorProviderJiraCloud[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putJiraCloud.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>[]

---

##### `PutServiceNow` <a name="PutServiceNow" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putServiceNow"></a>

```csharp
private void PutServiceNow(IResolvable|SecurityhubConnectorV2ConnectorProviderServiceNow[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putServiceNow.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>[]

---

##### `ResetJiraCloud` <a name="ResetJiraCloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resetJiraCloud"></a>

```csharp
private void ResetJiraCloud()
```

##### `ResetServiceNow` <a name="ResetServiceNow" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resetServiceNow"></a>

```csharp
private void ResetServiceNow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.jiraCloud">JiraCloud</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList">SecurityhubConnectorV2ConnectorProviderJiraCloudList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList">SecurityhubConnectorV2ConnectorProviderServiceNowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.jiraCloudInput">JiraCloudInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.serviceNowInput">ServiceNowInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JiraCloud`<sup>Required</sup> <a name="JiraCloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.jiraCloud"></a>

```csharp
public SecurityhubConnectorV2ConnectorProviderJiraCloudList JiraCloud { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList">SecurityhubConnectorV2ConnectorProviderJiraCloudList</a>

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.serviceNow"></a>

```csharp
public SecurityhubConnectorV2ConnectorProviderServiceNowList ServiceNow { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList">SecurityhubConnectorV2ConnectorProviderServiceNowList</a>

---

##### `JiraCloudInput`<sup>Optional</sup> <a name="JiraCloudInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.jiraCloudInput"></a>

```csharp
public IResolvable|SecurityhubConnectorV2ConnectorProviderJiraCloud[] JiraCloudInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud">SecurityhubConnectorV2ConnectorProviderJiraCloud</a>[]

---

##### `ServiceNowInput`<sup>Optional</sup> <a name="ServiceNowInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.serviceNowInput"></a>

```csharp
public IResolvable|SecurityhubConnectorV2ConnectorProviderServiceNow[] ServiceNowInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubConnectorV2ConnectorProvider InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider">SecurityhubConnectorV2ConnectorProvider</a>

---


### SecurityhubConnectorV2ConnectorProviderServiceNowList <a name="SecurityhubConnectorV2ConnectorProviderServiceNowList" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubConnectorV2ConnectorProviderServiceNowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.get"></a>

```csharp
private SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubConnectorV2ConnectorProviderServiceNow[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>[]

---


### SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference <a name="SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.authStatus">AuthStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.instanceNameInput">InstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.instanceName">InstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthStatus`<sup>Required</sup> <a name="AuthStatus" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.authStatus"></a>

```csharp
public string AuthStatus { get; }
```

- *Type:* string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.instanceNameInput"></a>

```csharp
public string InstanceNameInput { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.instanceName"></a>

```csharp
public string InstanceName { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubConnectorV2ConnectorProviderServiceNow InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow">SecurityhubConnectorV2ConnectorProviderServiceNow</a>

---


### SecurityhubConnectorV2HealthList <a name="SecurityhubConnectorV2HealthList" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubConnectorV2HealthList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.get"></a>

```csharp
private SecurityhubConnectorV2HealthOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SecurityhubConnectorV2HealthOutputReference <a name="SecurityhubConnectorV2HealthOutputReference" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubConnectorV2HealthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.connectorStatus">ConnectorStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.lastCheckedAt">LastCheckedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Health">SecurityhubConnectorV2Health</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectorStatus`<sup>Required</sup> <a name="ConnectorStatus" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.connectorStatus"></a>

```csharp
public string ConnectorStatus { get; }
```

- *Type:* string

---

##### `LastCheckedAt`<sup>Required</sup> <a name="LastCheckedAt" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.lastCheckedAt"></a>

```csharp
public string LastCheckedAt { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.internalValue"></a>

```csharp
public SecurityhubConnectorV2Health InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Health">SecurityhubConnectorV2Health</a>

---



