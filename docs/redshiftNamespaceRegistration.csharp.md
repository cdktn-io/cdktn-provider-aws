# `redshiftNamespaceRegistration` Submodule <a name="`redshiftNamespaceRegistration` Submodule" id="@cdktn/provider-aws.redshiftNamespaceRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftNamespaceRegistration <a name="RedshiftNamespaceRegistration" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/redshift_namespace_registration aws_redshift_namespace_registration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftNamespaceRegistration(Construct Scope, string Id, RedshiftNamespaceRegistrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig">RedshiftNamespaceRegistrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig">RedshiftNamespaceRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetProvisionedClusterIdentifier">ResetProvisionedClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetServerlessNamespaceIdentifier">ResetServerlessNamespaceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetServerlessWorkgroupIdentifier">ResetServerlessWorkgroupIdentifier</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetProvisionedClusterIdentifier` <a name="ResetProvisionedClusterIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetProvisionedClusterIdentifier"></a>

```csharp
private void ResetProvisionedClusterIdentifier()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetServerlessNamespaceIdentifier` <a name="ResetServerlessNamespaceIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetServerlessNamespaceIdentifier"></a>

```csharp
private void ResetServerlessNamespaceIdentifier()
```

##### `ResetServerlessWorkgroupIdentifier` <a name="ResetServerlessWorkgroupIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetServerlessWorkgroupIdentifier"></a>

```csharp
private void ResetServerlessWorkgroupIdentifier()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftNamespaceRegistration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftNamespaceRegistration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftNamespaceRegistration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftNamespaceRegistration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

RedshiftNamespaceRegistration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RedshiftNamespaceRegistration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftNamespaceRegistration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftNamespaceRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/redshift_namespace_registration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftNamespaceRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.consumerIdentifierInput">ConsumerIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.namespaceTypeInput">NamespaceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisionedClusterIdentifierInput">ProvisionedClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessNamespaceIdentifierInput">ServerlessNamespaceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessWorkgroupIdentifierInput">ServerlessWorkgroupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.consumerIdentifier">ConsumerIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.namespaceType">NamespaceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisionedClusterIdentifier">ProvisionedClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessNamespaceIdentifier">ServerlessNamespaceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessWorkgroupIdentifier">ServerlessWorkgroupIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConsumerIdentifierInput`<sup>Optional</sup> <a name="ConsumerIdentifierInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.consumerIdentifierInput"></a>

```csharp
public string ConsumerIdentifierInput { get; }
```

- *Type:* string

---

##### `NamespaceTypeInput`<sup>Optional</sup> <a name="NamespaceTypeInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.namespaceTypeInput"></a>

```csharp
public string NamespaceTypeInput { get; }
```

- *Type:* string

---

##### `ProvisionedClusterIdentifierInput`<sup>Optional</sup> <a name="ProvisionedClusterIdentifierInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisionedClusterIdentifierInput"></a>

```csharp
public string ProvisionedClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServerlessNamespaceIdentifierInput`<sup>Optional</sup> <a name="ServerlessNamespaceIdentifierInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessNamespaceIdentifierInput"></a>

```csharp
public string ServerlessNamespaceIdentifierInput { get; }
```

- *Type:* string

---

##### `ServerlessWorkgroupIdentifierInput`<sup>Optional</sup> <a name="ServerlessWorkgroupIdentifierInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessWorkgroupIdentifierInput"></a>

```csharp
public string ServerlessWorkgroupIdentifierInput { get; }
```

- *Type:* string

---

##### `ConsumerIdentifier`<sup>Required</sup> <a name="ConsumerIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.consumerIdentifier"></a>

```csharp
public string ConsumerIdentifier { get; }
```

- *Type:* string

---

##### `NamespaceType`<sup>Required</sup> <a name="NamespaceType" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.namespaceType"></a>

```csharp
public string NamespaceType { get; }
```

- *Type:* string

---

##### `ProvisionedClusterIdentifier`<sup>Required</sup> <a name="ProvisionedClusterIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisionedClusterIdentifier"></a>

```csharp
public string ProvisionedClusterIdentifier { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ServerlessNamespaceIdentifier`<sup>Required</sup> <a name="ServerlessNamespaceIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessNamespaceIdentifier"></a>

```csharp
public string ServerlessNamespaceIdentifier { get; }
```

- *Type:* string

---

##### `ServerlessWorkgroupIdentifier`<sup>Required</sup> <a name="ServerlessWorkgroupIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessWorkgroupIdentifier"></a>

```csharp
public string ServerlessWorkgroupIdentifier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftNamespaceRegistrationConfig <a name="RedshiftNamespaceRegistrationConfig" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new RedshiftNamespaceRegistrationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ConsumerIdentifier,
    string NamespaceType,
    string ProvisionedClusterIdentifier = null,
    string Region = null,
    string ServerlessNamespaceIdentifier = null,
    string ServerlessWorkgroupIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.consumerIdentifier">ConsumerIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/redshift_namespace_registration#consumer_identifier RedshiftNamespaceRegistration#consumer_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.namespaceType">NamespaceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/redshift_namespace_registration#namespace_type RedshiftNamespaceRegistration#namespace_type}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provisionedClusterIdentifier">ProvisionedClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/redshift_namespace_registration#provisioned_cluster_identifier RedshiftNamespaceRegistration#provisioned_cluster_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.serverlessNamespaceIdentifier">ServerlessNamespaceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/redshift_namespace_registration#serverless_namespace_identifier RedshiftNamespaceRegistration#serverless_namespace_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.serverlessWorkgroupIdentifier">ServerlessWorkgroupIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/redshift_namespace_registration#serverless_workgroup_identifier RedshiftNamespaceRegistration#serverless_workgroup_identifier}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConsumerIdentifier`<sup>Required</sup> <a name="ConsumerIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.consumerIdentifier"></a>

```csharp
public string ConsumerIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/redshift_namespace_registration#consumer_identifier RedshiftNamespaceRegistration#consumer_identifier}.

---

##### `NamespaceType`<sup>Required</sup> <a name="NamespaceType" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.namespaceType"></a>

```csharp
public string NamespaceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/redshift_namespace_registration#namespace_type RedshiftNamespaceRegistration#namespace_type}.

---

##### `ProvisionedClusterIdentifier`<sup>Optional</sup> <a name="ProvisionedClusterIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provisionedClusterIdentifier"></a>

```csharp
public string ProvisionedClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/redshift_namespace_registration#provisioned_cluster_identifier RedshiftNamespaceRegistration#provisioned_cluster_identifier}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/redshift_namespace_registration#region RedshiftNamespaceRegistration#region}

---

##### `ServerlessNamespaceIdentifier`<sup>Optional</sup> <a name="ServerlessNamespaceIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.serverlessNamespaceIdentifier"></a>

```csharp
public string ServerlessNamespaceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/redshift_namespace_registration#serverless_namespace_identifier RedshiftNamespaceRegistration#serverless_namespace_identifier}.

---

##### `ServerlessWorkgroupIdentifier`<sup>Optional</sup> <a name="ServerlessWorkgroupIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.serverlessWorkgroupIdentifier"></a>

```csharp
public string ServerlessWorkgroupIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/redshift_namespace_registration#serverless_workgroup_identifier RedshiftNamespaceRegistration#serverless_workgroup_identifier}.

---



