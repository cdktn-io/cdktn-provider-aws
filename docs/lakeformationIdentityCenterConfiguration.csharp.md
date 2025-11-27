# `lakeformationIdentityCenterConfiguration` Submodule <a name="`lakeformationIdentityCenterConfiguration` Submodule" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationIdentityCenterConfiguration <a name="LakeformationIdentityCenterConfiguration" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lakeformation_identity_center_configuration aws_lakeformation_identity_center_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationIdentityCenterConfiguration(Construct Scope, string Id, LakeformationIdentityCenterConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig">LakeformationIdentityCenterConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig">LakeformationIdentityCenterConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LakeformationIdentityCenterConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LakeformationIdentityCenterConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LakeformationIdentityCenterConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LakeformationIdentityCenterConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LakeformationIdentityCenterConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LakeformationIdentityCenterConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakeformationIdentityCenterConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakeformationIdentityCenterConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lakeformation_identity_center_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LakeformationIdentityCenterConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.applicationArn">ApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.resourceShare">ResourceShare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.applicationArn"></a>

```csharp
public string ApplicationArn { get; }
```

- *Type:* string

---

##### `ResourceShare`<sup>Required</sup> <a name="ResourceShare" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.resourceShare"></a>

```csharp
public string ResourceShare { get; }
```

- *Type:* string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationIdentityCenterConfigurationConfig <a name="LakeformationIdentityCenterConfigurationConfig" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationIdentityCenterConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceArn,
    string CatalogId = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | The ARN of the Identity Center instance. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.catalogId">CatalogId</a></code> | <code>string</code> | The ID of the Data Catalog. |
| <code><a href="#@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

The ARN of the Identity Center instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lakeformation_identity_center_configuration#instance_arn LakeformationIdentityCenterConfiguration#instance_arn}

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

The ID of the Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lakeformation_identity_center_configuration#catalog_id LakeformationIdentityCenterConfiguration#catalog_id}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.lakeformationIdentityCenterConfiguration.LakeformationIdentityCenterConfigurationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/lakeformation_identity_center_configuration#region LakeformationIdentityCenterConfiguration#region}

---



