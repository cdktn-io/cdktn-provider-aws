# `redshiftNamespaceRegistration` Submodule <a name="`redshiftNamespaceRegistration` Submodule" id="@cdktn/provider-aws.redshiftNamespaceRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftNamespaceRegistration <a name="RedshiftNamespaceRegistration" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration aws_redshift_namespace_registration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer"></a>

```typescript
import { redshiftNamespaceRegistration } from '@cdktn/provider-aws'

new redshiftNamespaceRegistration.RedshiftNamespaceRegistration(scope: Construct, id: string, config: RedshiftNamespaceRegistrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig">RedshiftNamespaceRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig">RedshiftNamespaceRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetProvisionedClusterIdentifier">resetProvisionedClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetServerlessNamespaceIdentifier">resetServerlessNamespaceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetServerlessWorkgroupIdentifier">resetServerlessWorkgroupIdentifier</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetProvisionedClusterIdentifier` <a name="resetProvisionedClusterIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetProvisionedClusterIdentifier"></a>

```typescript
public resetProvisionedClusterIdentifier(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetServerlessNamespaceIdentifier` <a name="resetServerlessNamespaceIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetServerlessNamespaceIdentifier"></a>

```typescript
public resetServerlessNamespaceIdentifier(): void
```

##### `resetServerlessWorkgroupIdentifier` <a name="resetServerlessWorkgroupIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetServerlessWorkgroupIdentifier"></a>

```typescript
public resetServerlessWorkgroupIdentifier(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftNamespaceRegistration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isConstruct"></a>

```typescript
import { redshiftNamespaceRegistration } from '@cdktn/provider-aws'

redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformElement"></a>

```typescript
import { redshiftNamespaceRegistration } from '@cdktn/provider-aws'

redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformResource"></a>

```typescript
import { redshiftNamespaceRegistration } from '@cdktn/provider-aws'

redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport"></a>

```typescript
import { redshiftNamespaceRegistration } from '@cdktn/provider-aws'

redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RedshiftNamespaceRegistration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftNamespaceRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftNamespaceRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftNamespaceRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.consumerIdentifierInput">consumerIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.namespaceTypeInput">namespaceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisionedClusterIdentifierInput">provisionedClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessNamespaceIdentifierInput">serverlessNamespaceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessWorkgroupIdentifierInput">serverlessWorkgroupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.consumerIdentifier">consumerIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.namespaceType">namespaceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisionedClusterIdentifier">provisionedClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessNamespaceIdentifier">serverlessNamespaceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessWorkgroupIdentifier">serverlessWorkgroupIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `consumerIdentifierInput`<sup>Optional</sup> <a name="consumerIdentifierInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.consumerIdentifierInput"></a>

```typescript
public readonly consumerIdentifierInput: string;
```

- *Type:* string

---

##### `namespaceTypeInput`<sup>Optional</sup> <a name="namespaceTypeInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.namespaceTypeInput"></a>

```typescript
public readonly namespaceTypeInput: string;
```

- *Type:* string

---

##### `provisionedClusterIdentifierInput`<sup>Optional</sup> <a name="provisionedClusterIdentifierInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisionedClusterIdentifierInput"></a>

```typescript
public readonly provisionedClusterIdentifierInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serverlessNamespaceIdentifierInput`<sup>Optional</sup> <a name="serverlessNamespaceIdentifierInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessNamespaceIdentifierInput"></a>

```typescript
public readonly serverlessNamespaceIdentifierInput: string;
```

- *Type:* string

---

##### `serverlessWorkgroupIdentifierInput`<sup>Optional</sup> <a name="serverlessWorkgroupIdentifierInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessWorkgroupIdentifierInput"></a>

```typescript
public readonly serverlessWorkgroupIdentifierInput: string;
```

- *Type:* string

---

##### `consumerIdentifier`<sup>Required</sup> <a name="consumerIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.consumerIdentifier"></a>

```typescript
public readonly consumerIdentifier: string;
```

- *Type:* string

---

##### `namespaceType`<sup>Required</sup> <a name="namespaceType" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.namespaceType"></a>

```typescript
public readonly namespaceType: string;
```

- *Type:* string

---

##### `provisionedClusterIdentifier`<sup>Required</sup> <a name="provisionedClusterIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisionedClusterIdentifier"></a>

```typescript
public readonly provisionedClusterIdentifier: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `serverlessNamespaceIdentifier`<sup>Required</sup> <a name="serverlessNamespaceIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessNamespaceIdentifier"></a>

```typescript
public readonly serverlessNamespaceIdentifier: string;
```

- *Type:* string

---

##### `serverlessWorkgroupIdentifier`<sup>Required</sup> <a name="serverlessWorkgroupIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessWorkgroupIdentifier"></a>

```typescript
public readonly serverlessWorkgroupIdentifier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftNamespaceRegistrationConfig <a name="RedshiftNamespaceRegistrationConfig" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.Initializer"></a>

```typescript
import { redshiftNamespaceRegistration } from '@cdktn/provider-aws'

const redshiftNamespaceRegistrationConfig: redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.consumerIdentifier">consumerIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#consumer_identifier RedshiftNamespaceRegistration#consumer_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.namespaceType">namespaceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#namespace_type RedshiftNamespaceRegistration#namespace_type}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provisionedClusterIdentifier">provisionedClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#provisioned_cluster_identifier RedshiftNamespaceRegistration#provisioned_cluster_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.serverlessNamespaceIdentifier">serverlessNamespaceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#serverless_namespace_identifier RedshiftNamespaceRegistration#serverless_namespace_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.serverlessWorkgroupIdentifier">serverlessWorkgroupIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#serverless_workgroup_identifier RedshiftNamespaceRegistration#serverless_workgroup_identifier}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `consumerIdentifier`<sup>Required</sup> <a name="consumerIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.consumerIdentifier"></a>

```typescript
public readonly consumerIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#consumer_identifier RedshiftNamespaceRegistration#consumer_identifier}.

---

##### `namespaceType`<sup>Required</sup> <a name="namespaceType" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.namespaceType"></a>

```typescript
public readonly namespaceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#namespace_type RedshiftNamespaceRegistration#namespace_type}.

---

##### `provisionedClusterIdentifier`<sup>Optional</sup> <a name="provisionedClusterIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provisionedClusterIdentifier"></a>

```typescript
public readonly provisionedClusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#provisioned_cluster_identifier RedshiftNamespaceRegistration#provisioned_cluster_identifier}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#region RedshiftNamespaceRegistration#region}

---

##### `serverlessNamespaceIdentifier`<sup>Optional</sup> <a name="serverlessNamespaceIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.serverlessNamespaceIdentifier"></a>

```typescript
public readonly serverlessNamespaceIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#serverless_namespace_identifier RedshiftNamespaceRegistration#serverless_namespace_identifier}.

---

##### `serverlessWorkgroupIdentifier`<sup>Optional</sup> <a name="serverlessWorkgroupIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.serverlessWorkgroupIdentifier"></a>

```typescript
public readonly serverlessWorkgroupIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/redshift_namespace_registration#serverless_workgroup_identifier RedshiftNamespaceRegistration#serverless_workgroup_identifier}.

---



