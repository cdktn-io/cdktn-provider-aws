# `ec2NetworkInsightsAccessScope` Submodule <a name="`ec2NetworkInsightsAccessScope` Submodule" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2NetworkInsightsAccessScope <a name="Ec2NetworkInsightsAccessScope" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope aws_ec2_network_insights_access_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope(scope: Construct, id: string, config?: Ec2NetworkInsightsAccessScopeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig">Ec2NetworkInsightsAccessScopeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig">Ec2NetworkInsightsAccessScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.putExcludePaths">putExcludePaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.putMatchPaths">putMatchPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetExcludePaths">resetExcludePaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetMatchPaths">resetMatchPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExcludePaths` <a name="putExcludePaths" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.putExcludePaths"></a>

```typescript
public putExcludePaths(value: IResolvable | Ec2NetworkInsightsAccessScopeExcludePaths[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.putExcludePaths.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths">Ec2NetworkInsightsAccessScopeExcludePaths</a>[]

---

##### `putMatchPaths` <a name="putMatchPaths" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.putMatchPaths"></a>

```typescript
public putMatchPaths(value: IResolvable | Ec2NetworkInsightsAccessScopeMatchPaths[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.putMatchPaths.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths">Ec2NetworkInsightsAccessScopeMatchPaths</a>[]

---

##### `resetExcludePaths` <a name="resetExcludePaths" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetExcludePaths"></a>

```typescript
public resetExcludePaths(): void
```

##### `resetMatchPaths` <a name="resetMatchPaths" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetMatchPaths"></a>

```typescript
public resetMatchPaths(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2NetworkInsightsAccessScope resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isConstruct"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isTerraformElement"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isTerraformResource"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.generateConfigForImport"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2NetworkInsightsAccessScope resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2NetworkInsightsAccessScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2NetworkInsightsAccessScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2NetworkInsightsAccessScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.excludePaths">excludePaths</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList">Ec2NetworkInsightsAccessScopeExcludePathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.matchPaths">matchPaths</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList">Ec2NetworkInsightsAccessScopeMatchPathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.excludePathsInput">excludePathsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths">Ec2NetworkInsightsAccessScopeExcludePaths</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.matchPathsInput">matchPathsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths">Ec2NetworkInsightsAccessScopeMatchPaths</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `excludePaths`<sup>Required</sup> <a name="excludePaths" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.excludePaths"></a>

```typescript
public readonly excludePaths: Ec2NetworkInsightsAccessScopeExcludePathsList;
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList">Ec2NetworkInsightsAccessScopeExcludePathsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `matchPaths`<sup>Required</sup> <a name="matchPaths" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.matchPaths"></a>

```typescript
public readonly matchPaths: Ec2NetworkInsightsAccessScopeMatchPathsList;
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList">Ec2NetworkInsightsAccessScopeMatchPathsList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `excludePathsInput`<sup>Optional</sup> <a name="excludePathsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.excludePathsInput"></a>

```typescript
public readonly excludePathsInput: IResolvable | Ec2NetworkInsightsAccessScopeExcludePaths[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths">Ec2NetworkInsightsAccessScopeExcludePaths</a>[]

---

##### `matchPathsInput`<sup>Optional</sup> <a name="matchPathsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.matchPathsInput"></a>

```typescript
public readonly matchPathsInput: IResolvable | Ec2NetworkInsightsAccessScopeMatchPaths[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths">Ec2NetworkInsightsAccessScopeMatchPaths</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2NetworkInsightsAccessScopeConfig <a name="Ec2NetworkInsightsAccessScopeConfig" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

const ec2NetworkInsightsAccessScopeConfig: ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.excludePaths">excludePaths</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths">Ec2NetworkInsightsAccessScopeExcludePaths</a>[]</code> | exclude_paths block. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.matchPaths">matchPaths</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths">Ec2NetworkInsightsAccessScopeMatchPaths</a>[]</code> | match_paths block. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#tags Ec2NetworkInsightsAccessScope#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `excludePaths`<sup>Optional</sup> <a name="excludePaths" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.excludePaths"></a>

```typescript
public readonly excludePaths: IResolvable | Ec2NetworkInsightsAccessScopeExcludePaths[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths">Ec2NetworkInsightsAccessScopeExcludePaths</a>[]

exclude_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#exclude_paths Ec2NetworkInsightsAccessScope#exclude_paths}

---

##### `matchPaths`<sup>Optional</sup> <a name="matchPaths" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.matchPaths"></a>

```typescript
public readonly matchPaths: IResolvable | Ec2NetworkInsightsAccessScopeMatchPaths[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths">Ec2NetworkInsightsAccessScopeMatchPaths</a>[]

match_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#match_paths Ec2NetworkInsightsAccessScope#match_paths}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#region Ec2NetworkInsightsAccessScope#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#tags Ec2NetworkInsightsAccessScope#tags}.

---

### Ec2NetworkInsightsAccessScopeExcludePaths <a name="Ec2NetworkInsightsAccessScopeExcludePaths" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

const ec2NetworkInsightsAccessScopeExcludePaths: ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths.property.destination">destination</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination">Ec2NetworkInsightsAccessScopeExcludePathsDestination</a>[]</code> | destination block. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths.property.source">source</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource">Ec2NetworkInsightsAccessScopeExcludePathsSource</a>[]</code> | source block. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths.property.throughResources">throughResources</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources">Ec2NetworkInsightsAccessScopeExcludePathsThroughResources</a>[]</code> | through_resources block. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths.property.destination"></a>

```typescript
public readonly destination: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsDestination[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination">Ec2NetworkInsightsAccessScopeExcludePathsDestination</a>[]

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination Ec2NetworkInsightsAccessScope#destination}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths.property.source"></a>

```typescript
public readonly source: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsSource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource">Ec2NetworkInsightsAccessScopeExcludePathsSource</a>[]

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source Ec2NetworkInsightsAccessScope#source}

---

##### `throughResources`<sup>Optional</sup> <a name="throughResources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths.property.throughResources"></a>

```typescript
public readonly throughResources: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsThroughResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources">Ec2NetworkInsightsAccessScopeExcludePathsThroughResources</a>[]

through_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#through_resources Ec2NetworkInsightsAccessScope#through_resources}

---

### Ec2NetworkInsightsAccessScopeExcludePathsDestination <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestination" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

const ec2NetworkInsightsAccessScopeExcludePathsDestination: ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination.property.packetHeaderStatement">packetHeaderStatement</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a>[]</code> | packet_header_statement block. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination.property.resourceStatement">resourceStatement</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a>[]</code> | resource_statement block. |

---

##### `packetHeaderStatement`<sup>Optional</sup> <a name="packetHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination.property.packetHeaderStatement"></a>

```typescript
public readonly packetHeaderStatement: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a>[]

packet_header_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}

---

##### `resourceStatement`<sup>Optional</sup> <a name="resourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination.property.resourceStatement"></a>

```typescript
public readonly resourceStatement: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a>[]

resource_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}

---

### Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

const ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement: ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.destinationPrefixLists">destinationPrefixLists</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.protocols">protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.sourcePorts">sourcePorts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.sourcePrefixLists">sourcePrefixLists</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}. |

---

##### `destinationAddresses`<sup>Optional</sup> <a name="destinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}.

---

##### `destinationPorts`<sup>Optional</sup> <a name="destinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}.

---

##### `destinationPrefixLists`<sup>Optional</sup> <a name="destinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.destinationPrefixLists"></a>

```typescript
public readonly destinationPrefixLists: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}.

---

##### `sourceAddresses`<sup>Optional</sup> <a name="sourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}.

---

##### `sourcePorts`<sup>Optional</sup> <a name="sourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.sourcePorts"></a>

```typescript
public readonly sourcePorts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}.

---

##### `sourcePrefixLists`<sup>Optional</sup> <a name="sourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.sourcePrefixLists"></a>

```typescript
public readonly sourcePrefixLists: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}.

---

### Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

const ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement: ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement.property.resources">resources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}. |

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}.

---

### Ec2NetworkInsightsAccessScopeExcludePathsSource <a name="Ec2NetworkInsightsAccessScopeExcludePathsSource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

const ec2NetworkInsightsAccessScopeExcludePathsSource: ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource.property.packetHeaderStatement">packetHeaderStatement</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a>[]</code> | packet_header_statement block. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource.property.resourceStatement">resourceStatement</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a>[]</code> | resource_statement block. |

---

##### `packetHeaderStatement`<sup>Optional</sup> <a name="packetHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource.property.packetHeaderStatement"></a>

```typescript
public readonly packetHeaderStatement: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a>[]

packet_header_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}

---

##### `resourceStatement`<sup>Optional</sup> <a name="resourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource.property.resourceStatement"></a>

```typescript
public readonly resourceStatement: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a>[]

resource_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}

---

### Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement <a name="Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

const ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement: ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.destinationPrefixLists">destinationPrefixLists</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.protocols">protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.sourcePorts">sourcePorts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.sourcePrefixLists">sourcePrefixLists</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}. |

---

##### `destinationAddresses`<sup>Optional</sup> <a name="destinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}.

---

##### `destinationPorts`<sup>Optional</sup> <a name="destinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}.

---

##### `destinationPrefixLists`<sup>Optional</sup> <a name="destinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.destinationPrefixLists"></a>

```typescript
public readonly destinationPrefixLists: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}.

---

##### `sourceAddresses`<sup>Optional</sup> <a name="sourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}.

---

##### `sourcePorts`<sup>Optional</sup> <a name="sourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.sourcePorts"></a>

```typescript
public readonly sourcePorts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}.

---

##### `sourcePrefixLists`<sup>Optional</sup> <a name="sourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.sourcePrefixLists"></a>

```typescript
public readonly sourcePrefixLists: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}.

---

### Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement <a name="Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

const ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement: ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement.property.resources">resources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}. |

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}.

---

### Ec2NetworkInsightsAccessScopeExcludePathsThroughResources <a name="Ec2NetworkInsightsAccessScopeExcludePathsThroughResources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

const ec2NetworkInsightsAccessScopeExcludePathsThroughResources: ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources.property.resourceStatement">resourceStatement</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a>[]</code> | resource_statement block. |

---

##### `resourceStatement`<sup>Optional</sup> <a name="resourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources.property.resourceStatement"></a>

```typescript
public readonly resourceStatement: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a>[]

resource_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}

---

### Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement <a name="Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

const ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement: ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement.property.resources">resources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}. |

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}.

---

### Ec2NetworkInsightsAccessScopeMatchPaths <a name="Ec2NetworkInsightsAccessScopeMatchPaths" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

const ec2NetworkInsightsAccessScopeMatchPaths: ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths.property.destination">destination</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination">Ec2NetworkInsightsAccessScopeMatchPathsDestination</a>[]</code> | destination block. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths.property.source">source</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource">Ec2NetworkInsightsAccessScopeMatchPathsSource</a>[]</code> | source block. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths.property.destination"></a>

```typescript
public readonly destination: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsDestination[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination">Ec2NetworkInsightsAccessScopeMatchPathsDestination</a>[]

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination Ec2NetworkInsightsAccessScope#destination}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths.property.source"></a>

```typescript
public readonly source: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsSource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource">Ec2NetworkInsightsAccessScopeMatchPathsSource</a>[]

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source Ec2NetworkInsightsAccessScope#source}

---

### Ec2NetworkInsightsAccessScopeMatchPathsDestination <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestination" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

const ec2NetworkInsightsAccessScopeMatchPathsDestination: ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination.property.packetHeaderStatement">packetHeaderStatement</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a>[]</code> | packet_header_statement block. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination.property.resourceStatement">resourceStatement</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a>[]</code> | resource_statement block. |

---

##### `packetHeaderStatement`<sup>Optional</sup> <a name="packetHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination.property.packetHeaderStatement"></a>

```typescript
public readonly packetHeaderStatement: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a>[]

packet_header_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}

---

##### `resourceStatement`<sup>Optional</sup> <a name="resourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination.property.resourceStatement"></a>

```typescript
public readonly resourceStatement: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a>[]

resource_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}

---

### Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

const ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement: ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.destinationPrefixLists">destinationPrefixLists</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.protocols">protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.sourcePorts">sourcePorts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.sourcePrefixLists">sourcePrefixLists</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}. |

---

##### `destinationAddresses`<sup>Optional</sup> <a name="destinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}.

---

##### `destinationPorts`<sup>Optional</sup> <a name="destinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}.

---

##### `destinationPrefixLists`<sup>Optional</sup> <a name="destinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.destinationPrefixLists"></a>

```typescript
public readonly destinationPrefixLists: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}.

---

##### `sourceAddresses`<sup>Optional</sup> <a name="sourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}.

---

##### `sourcePorts`<sup>Optional</sup> <a name="sourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.sourcePorts"></a>

```typescript
public readonly sourcePorts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}.

---

##### `sourcePrefixLists`<sup>Optional</sup> <a name="sourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.sourcePrefixLists"></a>

```typescript
public readonly sourcePrefixLists: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}.

---

### Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

const ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement: ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement.property.resources">resources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}. |

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}.

---

### Ec2NetworkInsightsAccessScopeMatchPathsSource <a name="Ec2NetworkInsightsAccessScopeMatchPathsSource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

const ec2NetworkInsightsAccessScopeMatchPathsSource: ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource.property.packetHeaderStatement">packetHeaderStatement</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a>[]</code> | packet_header_statement block. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource.property.resourceStatement">resourceStatement</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a>[]</code> | resource_statement block. |

---

##### `packetHeaderStatement`<sup>Optional</sup> <a name="packetHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource.property.packetHeaderStatement"></a>

```typescript
public readonly packetHeaderStatement: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a>[]

packet_header_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}

---

##### `resourceStatement`<sup>Optional</sup> <a name="resourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource.property.resourceStatement"></a>

```typescript
public readonly resourceStatement: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a>[]

resource_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}

---

### Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement <a name="Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

const ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement: ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.destinationPrefixLists">destinationPrefixLists</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.protocols">protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.sourcePorts">sourcePorts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.sourcePrefixLists">sourcePrefixLists</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}. |

---

##### `destinationAddresses`<sup>Optional</sup> <a name="destinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}.

---

##### `destinationPorts`<sup>Optional</sup> <a name="destinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}.

---

##### `destinationPrefixLists`<sup>Optional</sup> <a name="destinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.destinationPrefixLists"></a>

```typescript
public readonly destinationPrefixLists: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}.

---

##### `sourceAddresses`<sup>Optional</sup> <a name="sourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}.

---

##### `sourcePorts`<sup>Optional</sup> <a name="sourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.sourcePorts"></a>

```typescript
public readonly sourcePorts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}.

---

##### `sourcePrefixLists`<sup>Optional</sup> <a name="sourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.sourcePrefixLists"></a>

```typescript
public readonly sourcePrefixLists: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}.

---

### Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement <a name="Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

const ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement: ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement.property.resources">resources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}. |

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2NetworkInsightsAccessScopeExcludePathsDestinationList <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestinationList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.get"></a>

```typescript
public get(index: number): Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination">Ec2NetworkInsightsAccessScopeExcludePathsDestination</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsDestination[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination">Ec2NetworkInsightsAccessScopeExcludePathsDestination</a>[]

---


### Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.putPacketHeaderStatement">putPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.putResourceStatement">putResourceStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resetPacketHeaderStatement">resetPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resetResourceStatement">resetResourceStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPacketHeaderStatement` <a name="putPacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.putPacketHeaderStatement"></a>

```typescript
public putPacketHeaderStatement(value: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.putPacketHeaderStatement.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a>[]

---

##### `putResourceStatement` <a name="putResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.putResourceStatement"></a>

```typescript
public putResourceStatement(value: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.putResourceStatement.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a>[]

---

##### `resetPacketHeaderStatement` <a name="resetPacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resetPacketHeaderStatement"></a>

```typescript
public resetPacketHeaderStatement(): void
```

##### `resetResourceStatement` <a name="resetResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resetResourceStatement"></a>

```typescript
public resetResourceStatement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.packetHeaderStatement">packetHeaderStatement</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.resourceStatement">resourceStatement</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.packetHeaderStatementInput">packetHeaderStatementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.resourceStatementInput">resourceStatementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination">Ec2NetworkInsightsAccessScopeExcludePathsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `packetHeaderStatement`<sup>Required</sup> <a name="packetHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.packetHeaderStatement"></a>

```typescript
public readonly packetHeaderStatement: Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList;
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList</a>

---

##### `resourceStatement`<sup>Required</sup> <a name="resourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.resourceStatement"></a>

```typescript
public readonly resourceStatement: Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList;
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList</a>

---

##### `packetHeaderStatementInput`<sup>Optional</sup> <a name="packetHeaderStatementInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.packetHeaderStatementInput"></a>

```typescript
public readonly packetHeaderStatementInput: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a>[]

---

##### `resourceStatementInput`<sup>Optional</sup> <a name="resourceStatementInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.resourceStatementInput"></a>

```typescript
public readonly resourceStatementInput: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination">Ec2NetworkInsightsAccessScopeExcludePathsDestination</a>

---


### Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.get"></a>

```typescript
public get(index: number): Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a>[]

---


### Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetDestinationAddresses">resetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetDestinationPorts">resetDestinationPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetDestinationPrefixLists">resetDestinationPrefixLists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetSourceAddresses">resetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetSourcePorts">resetSourcePorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetSourcePrefixLists">resetSourcePrefixLists</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationAddresses` <a name="resetDestinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetDestinationAddresses"></a>

```typescript
public resetDestinationAddresses(): void
```

##### `resetDestinationPorts` <a name="resetDestinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetDestinationPorts"></a>

```typescript
public resetDestinationPorts(): void
```

##### `resetDestinationPrefixLists` <a name="resetDestinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetDestinationPrefixLists"></a>

```typescript
public resetDestinationPrefixLists(): void
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetProtocols"></a>

```typescript
public resetProtocols(): void
```

##### `resetSourceAddresses` <a name="resetSourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetSourceAddresses"></a>

```typescript
public resetSourceAddresses(): void
```

##### `resetSourcePorts` <a name="resetSourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetSourcePorts"></a>

```typescript
public resetSourcePorts(): void
```

##### `resetSourcePrefixLists` <a name="resetSourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetSourcePrefixLists"></a>

```typescript
public resetSourcePrefixLists(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationAddressesInput">destinationAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPortsInput">destinationPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixListsInput">destinationPrefixListsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourceAddressesInput">sourceAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePortsInput">sourcePortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixListsInput">sourcePrefixListsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixLists">destinationPrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePorts">sourcePorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixLists">sourcePrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationAddressesInput`<sup>Optional</sup> <a name="destinationAddressesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationAddressesInput"></a>

```typescript
public readonly destinationAddressesInput: string[];
```

- *Type:* string[]

---

##### `destinationPortsInput`<sup>Optional</sup> <a name="destinationPortsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPortsInput"></a>

```typescript
public readonly destinationPortsInput: string[];
```

- *Type:* string[]

---

##### `destinationPrefixListsInput`<sup>Optional</sup> <a name="destinationPrefixListsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixListsInput"></a>

```typescript
public readonly destinationPrefixListsInput: string[];
```

- *Type:* string[]

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `sourceAddressesInput`<sup>Optional</sup> <a name="sourceAddressesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourceAddressesInput"></a>

```typescript
public readonly sourceAddressesInput: string[];
```

- *Type:* string[]

---

##### `sourcePortsInput`<sup>Optional</sup> <a name="sourcePortsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePortsInput"></a>

```typescript
public readonly sourcePortsInput: string[];
```

- *Type:* string[]

---

##### `sourcePrefixListsInput`<sup>Optional</sup> <a name="sourcePrefixListsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixListsInput"></a>

```typescript
public readonly sourcePrefixListsInput: string[];
```

- *Type:* string[]

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

---

##### `destinationPrefixLists`<sup>Required</sup> <a name="destinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixLists"></a>

```typescript
public readonly destinationPrefixLists: string[];
```

- *Type:* string[]

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

---

##### `sourcePorts`<sup>Required</sup> <a name="sourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePorts"></a>

```typescript
public readonly sourcePorts: string[];
```

- *Type:* string[]

---

##### `sourcePrefixLists`<sup>Required</sup> <a name="sourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixLists"></a>

```typescript
public readonly sourcePrefixLists: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a>

---


### Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.get"></a>

```typescript
public get(index: number): Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a>[]

---


### Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResources` <a name="resetResources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resetResourceTypes"></a>

```typescript
public resetResourceTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resourceTypesInput"></a>

```typescript
public readonly resourceTypesInput: string[];
```

- *Type:* string[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a>

---


### Ec2NetworkInsightsAccessScopeExcludePathsList <a name="Ec2NetworkInsightsAccessScopeExcludePathsList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.get"></a>

```typescript
public get(index: number): Ec2NetworkInsightsAccessScopeExcludePathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths">Ec2NetworkInsightsAccessScopeExcludePaths</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeExcludePaths[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths">Ec2NetworkInsightsAccessScopeExcludePaths</a>[]

---


### Ec2NetworkInsightsAccessScopeExcludePathsOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putThroughResources">putThroughResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resetThroughResources">resetThroughResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putDestination"></a>

```typescript
public putDestination(value: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsDestination[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putDestination.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination">Ec2NetworkInsightsAccessScopeExcludePathsDestination</a>[]

---

##### `putSource` <a name="putSource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putSource"></a>

```typescript
public putSource(value: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsSource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putSource.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource">Ec2NetworkInsightsAccessScopeExcludePathsSource</a>[]

---

##### `putThroughResources` <a name="putThroughResources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putThroughResources"></a>

```typescript
public putThroughResources(value: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsThroughResources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putThroughResources.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources">Ec2NetworkInsightsAccessScopeExcludePathsThroughResources</a>[]

---

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetThroughResources` <a name="resetThroughResources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resetThroughResources"></a>

```typescript
public resetThroughResources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList">Ec2NetworkInsightsAccessScopeExcludePathsDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList">Ec2NetworkInsightsAccessScopeExcludePathsSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.throughResources">throughResources</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.destinationInput">destinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination">Ec2NetworkInsightsAccessScopeExcludePathsDestination</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.sourceInput">sourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource">Ec2NetworkInsightsAccessScopeExcludePathsSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.throughResourcesInput">throughResourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources">Ec2NetworkInsightsAccessScopeExcludePathsThroughResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths">Ec2NetworkInsightsAccessScopeExcludePaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.destination"></a>

```typescript
public readonly destination: Ec2NetworkInsightsAccessScopeExcludePathsDestinationList;
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationList">Ec2NetworkInsightsAccessScopeExcludePathsDestinationList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.source"></a>

```typescript
public readonly source: Ec2NetworkInsightsAccessScopeExcludePathsSourceList;
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList">Ec2NetworkInsightsAccessScopeExcludePathsSourceList</a>

---

##### `throughResources`<sup>Required</sup> <a name="throughResources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.throughResources"></a>

```typescript
public readonly throughResources: Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList;
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsDestination[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination">Ec2NetworkInsightsAccessScopeExcludePathsDestination</a>[]

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsSource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource">Ec2NetworkInsightsAccessScopeExcludePathsSource</a>[]

---

##### `throughResourcesInput`<sup>Optional</sup> <a name="throughResourcesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.throughResourcesInput"></a>

```typescript
public readonly throughResourcesInput: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsThroughResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources">Ec2NetworkInsightsAccessScopeExcludePathsThroughResources</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeExcludePaths;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths">Ec2NetworkInsightsAccessScopeExcludePaths</a>

---


### Ec2NetworkInsightsAccessScopeExcludePathsSourceList <a name="Ec2NetworkInsightsAccessScopeExcludePathsSourceList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.get"></a>

```typescript
public get(index: number): Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource">Ec2NetworkInsightsAccessScopeExcludePathsSource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsSource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource">Ec2NetworkInsightsAccessScopeExcludePathsSource</a>[]

---


### Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.putPacketHeaderStatement">putPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.putResourceStatement">putResourceStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resetPacketHeaderStatement">resetPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resetResourceStatement">resetResourceStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPacketHeaderStatement` <a name="putPacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.putPacketHeaderStatement"></a>

```typescript
public putPacketHeaderStatement(value: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.putPacketHeaderStatement.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a>[]

---

##### `putResourceStatement` <a name="putResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.putResourceStatement"></a>

```typescript
public putResourceStatement(value: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.putResourceStatement.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a>[]

---

##### `resetPacketHeaderStatement` <a name="resetPacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resetPacketHeaderStatement"></a>

```typescript
public resetPacketHeaderStatement(): void
```

##### `resetResourceStatement` <a name="resetResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resetResourceStatement"></a>

```typescript
public resetResourceStatement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.packetHeaderStatement">packetHeaderStatement</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.resourceStatement">resourceStatement</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.packetHeaderStatementInput">packetHeaderStatementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.resourceStatementInput">resourceStatementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource">Ec2NetworkInsightsAccessScopeExcludePathsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `packetHeaderStatement`<sup>Required</sup> <a name="packetHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.packetHeaderStatement"></a>

```typescript
public readonly packetHeaderStatement: Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList;
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList</a>

---

##### `resourceStatement`<sup>Required</sup> <a name="resourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.resourceStatement"></a>

```typescript
public readonly resourceStatement: Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList;
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList</a>

---

##### `packetHeaderStatementInput`<sup>Optional</sup> <a name="packetHeaderStatementInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.packetHeaderStatementInput"></a>

```typescript
public readonly packetHeaderStatementInput: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a>[]

---

##### `resourceStatementInput`<sup>Optional</sup> <a name="resourceStatementInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.resourceStatementInput"></a>

```typescript
public readonly resourceStatementInput: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource">Ec2NetworkInsightsAccessScopeExcludePathsSource</a>

---


### Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList <a name="Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.get"></a>

```typescript
public get(index: number): Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a>[]

---


### Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetDestinationAddresses">resetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetDestinationPorts">resetDestinationPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetDestinationPrefixLists">resetDestinationPrefixLists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetSourceAddresses">resetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetSourcePorts">resetSourcePorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetSourcePrefixLists">resetSourcePrefixLists</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationAddresses` <a name="resetDestinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetDestinationAddresses"></a>

```typescript
public resetDestinationAddresses(): void
```

##### `resetDestinationPorts` <a name="resetDestinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetDestinationPorts"></a>

```typescript
public resetDestinationPorts(): void
```

##### `resetDestinationPrefixLists` <a name="resetDestinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetDestinationPrefixLists"></a>

```typescript
public resetDestinationPrefixLists(): void
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetProtocols"></a>

```typescript
public resetProtocols(): void
```

##### `resetSourceAddresses` <a name="resetSourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetSourceAddresses"></a>

```typescript
public resetSourceAddresses(): void
```

##### `resetSourcePorts` <a name="resetSourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetSourcePorts"></a>

```typescript
public resetSourcePorts(): void
```

##### `resetSourcePrefixLists` <a name="resetSourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetSourcePrefixLists"></a>

```typescript
public resetSourcePrefixLists(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationAddressesInput">destinationAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPortsInput">destinationPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixListsInput">destinationPrefixListsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourceAddressesInput">sourceAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePortsInput">sourcePortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixListsInput">sourcePrefixListsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixLists">destinationPrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePorts">sourcePorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixLists">sourcePrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationAddressesInput`<sup>Optional</sup> <a name="destinationAddressesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationAddressesInput"></a>

```typescript
public readonly destinationAddressesInput: string[];
```

- *Type:* string[]

---

##### `destinationPortsInput`<sup>Optional</sup> <a name="destinationPortsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPortsInput"></a>

```typescript
public readonly destinationPortsInput: string[];
```

- *Type:* string[]

---

##### `destinationPrefixListsInput`<sup>Optional</sup> <a name="destinationPrefixListsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixListsInput"></a>

```typescript
public readonly destinationPrefixListsInput: string[];
```

- *Type:* string[]

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `sourceAddressesInput`<sup>Optional</sup> <a name="sourceAddressesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourceAddressesInput"></a>

```typescript
public readonly sourceAddressesInput: string[];
```

- *Type:* string[]

---

##### `sourcePortsInput`<sup>Optional</sup> <a name="sourcePortsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePortsInput"></a>

```typescript
public readonly sourcePortsInput: string[];
```

- *Type:* string[]

---

##### `sourcePrefixListsInput`<sup>Optional</sup> <a name="sourcePrefixListsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixListsInput"></a>

```typescript
public readonly sourcePrefixListsInput: string[];
```

- *Type:* string[]

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

---

##### `destinationPrefixLists`<sup>Required</sup> <a name="destinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixLists"></a>

```typescript
public readonly destinationPrefixLists: string[];
```

- *Type:* string[]

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

---

##### `sourcePorts`<sup>Required</sup> <a name="sourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePorts"></a>

```typescript
public readonly sourcePorts: string[];
```

- *Type:* string[]

---

##### `sourcePrefixLists`<sup>Required</sup> <a name="sourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixLists"></a>

```typescript
public readonly sourcePrefixLists: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a>

---


### Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList <a name="Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.get"></a>

```typescript
public get(index: number): Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a>[]

---


### Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResources` <a name="resetResources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resetResourceTypes"></a>

```typescript
public resetResourceTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resourceTypesInput"></a>

```typescript
public readonly resourceTypesInput: string[];
```

- *Type:* string[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a>

---


### Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList <a name="Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.get"></a>

```typescript
public get(index: number): Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources">Ec2NetworkInsightsAccessScopeExcludePathsThroughResources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsThroughResources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources">Ec2NetworkInsightsAccessScopeExcludePathsThroughResources</a>[]

---


### Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.putResourceStatement">putResourceStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.resetResourceStatement">resetResourceStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourceStatement` <a name="putResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.putResourceStatement"></a>

```typescript
public putResourceStatement(value: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.putResourceStatement.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a>[]

---

##### `resetResourceStatement` <a name="resetResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.resetResourceStatement"></a>

```typescript
public resetResourceStatement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.resourceStatement">resourceStatement</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.resourceStatementInput">resourceStatementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources">Ec2NetworkInsightsAccessScopeExcludePathsThroughResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceStatement`<sup>Required</sup> <a name="resourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.resourceStatement"></a>

```typescript
public readonly resourceStatement: Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList;
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList</a>

---

##### `resourceStatementInput`<sup>Optional</sup> <a name="resourceStatementInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.resourceStatementInput"></a>

```typescript
public readonly resourceStatementInput: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsThroughResources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources">Ec2NetworkInsightsAccessScopeExcludePathsThroughResources</a>

---


### Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList <a name="Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.get"></a>

```typescript
public get(index: number): Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a>[]

---


### Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResources` <a name="resetResources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resetResourceTypes"></a>

```typescript
public resetResourceTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resourceTypesInput"></a>

```typescript
public readonly resourceTypesInput: string[];
```

- *Type:* string[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a>

---


### Ec2NetworkInsightsAccessScopeMatchPathsDestinationList <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestinationList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.get"></a>

```typescript
public get(index: number): Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination">Ec2NetworkInsightsAccessScopeMatchPathsDestination</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsDestination[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination">Ec2NetworkInsightsAccessScopeMatchPathsDestination</a>[]

---


### Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.putPacketHeaderStatement">putPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.putResourceStatement">putResourceStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resetPacketHeaderStatement">resetPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resetResourceStatement">resetResourceStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPacketHeaderStatement` <a name="putPacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.putPacketHeaderStatement"></a>

```typescript
public putPacketHeaderStatement(value: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.putPacketHeaderStatement.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a>[]

---

##### `putResourceStatement` <a name="putResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.putResourceStatement"></a>

```typescript
public putResourceStatement(value: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.putResourceStatement.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a>[]

---

##### `resetPacketHeaderStatement` <a name="resetPacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resetPacketHeaderStatement"></a>

```typescript
public resetPacketHeaderStatement(): void
```

##### `resetResourceStatement` <a name="resetResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resetResourceStatement"></a>

```typescript
public resetResourceStatement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.packetHeaderStatement">packetHeaderStatement</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.resourceStatement">resourceStatement</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.packetHeaderStatementInput">packetHeaderStatementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.resourceStatementInput">resourceStatementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination">Ec2NetworkInsightsAccessScopeMatchPathsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `packetHeaderStatement`<sup>Required</sup> <a name="packetHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.packetHeaderStatement"></a>

```typescript
public readonly packetHeaderStatement: Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList;
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList</a>

---

##### `resourceStatement`<sup>Required</sup> <a name="resourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.resourceStatement"></a>

```typescript
public readonly resourceStatement: Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList;
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList</a>

---

##### `packetHeaderStatementInput`<sup>Optional</sup> <a name="packetHeaderStatementInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.packetHeaderStatementInput"></a>

```typescript
public readonly packetHeaderStatementInput: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a>[]

---

##### `resourceStatementInput`<sup>Optional</sup> <a name="resourceStatementInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.resourceStatementInput"></a>

```typescript
public readonly resourceStatementInput: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination">Ec2NetworkInsightsAccessScopeMatchPathsDestination</a>

---


### Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.get"></a>

```typescript
public get(index: number): Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a>[]

---


### Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetDestinationAddresses">resetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetDestinationPorts">resetDestinationPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetDestinationPrefixLists">resetDestinationPrefixLists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetSourceAddresses">resetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetSourcePorts">resetSourcePorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetSourcePrefixLists">resetSourcePrefixLists</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationAddresses` <a name="resetDestinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetDestinationAddresses"></a>

```typescript
public resetDestinationAddresses(): void
```

##### `resetDestinationPorts` <a name="resetDestinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetDestinationPorts"></a>

```typescript
public resetDestinationPorts(): void
```

##### `resetDestinationPrefixLists` <a name="resetDestinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetDestinationPrefixLists"></a>

```typescript
public resetDestinationPrefixLists(): void
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetProtocols"></a>

```typescript
public resetProtocols(): void
```

##### `resetSourceAddresses` <a name="resetSourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetSourceAddresses"></a>

```typescript
public resetSourceAddresses(): void
```

##### `resetSourcePorts` <a name="resetSourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetSourcePorts"></a>

```typescript
public resetSourcePorts(): void
```

##### `resetSourcePrefixLists` <a name="resetSourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetSourcePrefixLists"></a>

```typescript
public resetSourcePrefixLists(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationAddressesInput">destinationAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPortsInput">destinationPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixListsInput">destinationPrefixListsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourceAddressesInput">sourceAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePortsInput">sourcePortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixListsInput">sourcePrefixListsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixLists">destinationPrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePorts">sourcePorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixLists">sourcePrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationAddressesInput`<sup>Optional</sup> <a name="destinationAddressesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationAddressesInput"></a>

```typescript
public readonly destinationAddressesInput: string[];
```

- *Type:* string[]

---

##### `destinationPortsInput`<sup>Optional</sup> <a name="destinationPortsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPortsInput"></a>

```typescript
public readonly destinationPortsInput: string[];
```

- *Type:* string[]

---

##### `destinationPrefixListsInput`<sup>Optional</sup> <a name="destinationPrefixListsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixListsInput"></a>

```typescript
public readonly destinationPrefixListsInput: string[];
```

- *Type:* string[]

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `sourceAddressesInput`<sup>Optional</sup> <a name="sourceAddressesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourceAddressesInput"></a>

```typescript
public readonly sourceAddressesInput: string[];
```

- *Type:* string[]

---

##### `sourcePortsInput`<sup>Optional</sup> <a name="sourcePortsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePortsInput"></a>

```typescript
public readonly sourcePortsInput: string[];
```

- *Type:* string[]

---

##### `sourcePrefixListsInput`<sup>Optional</sup> <a name="sourcePrefixListsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixListsInput"></a>

```typescript
public readonly sourcePrefixListsInput: string[];
```

- *Type:* string[]

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

---

##### `destinationPrefixLists`<sup>Required</sup> <a name="destinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixLists"></a>

```typescript
public readonly destinationPrefixLists: string[];
```

- *Type:* string[]

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

---

##### `sourcePorts`<sup>Required</sup> <a name="sourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePorts"></a>

```typescript
public readonly sourcePorts: string[];
```

- *Type:* string[]

---

##### `sourcePrefixLists`<sup>Required</sup> <a name="sourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixLists"></a>

```typescript
public readonly sourcePrefixLists: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a>

---


### Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.get"></a>

```typescript
public get(index: number): Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a>[]

---


### Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResources` <a name="resetResources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resetResourceTypes"></a>

```typescript
public resetResourceTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resourceTypesInput"></a>

```typescript
public readonly resourceTypesInput: string[];
```

- *Type:* string[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a>

---


### Ec2NetworkInsightsAccessScopeMatchPathsList <a name="Ec2NetworkInsightsAccessScopeMatchPathsList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.get"></a>

```typescript
public get(index: number): Ec2NetworkInsightsAccessScopeMatchPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths">Ec2NetworkInsightsAccessScopeMatchPaths</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeMatchPaths[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths">Ec2NetworkInsightsAccessScopeMatchPaths</a>[]

---


### Ec2NetworkInsightsAccessScopeMatchPathsOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.putDestination"></a>

```typescript
public putDestination(value: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsDestination[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.putDestination.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination">Ec2NetworkInsightsAccessScopeMatchPathsDestination</a>[]

---

##### `putSource` <a name="putSource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.putSource"></a>

```typescript
public putSource(value: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsSource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.putSource.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource">Ec2NetworkInsightsAccessScopeMatchPathsSource</a>[]

---

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList">Ec2NetworkInsightsAccessScopeMatchPathsDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList">Ec2NetworkInsightsAccessScopeMatchPathsSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.destinationInput">destinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination">Ec2NetworkInsightsAccessScopeMatchPathsDestination</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.sourceInput">sourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource">Ec2NetworkInsightsAccessScopeMatchPathsSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths">Ec2NetworkInsightsAccessScopeMatchPaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.destination"></a>

```typescript
public readonly destination: Ec2NetworkInsightsAccessScopeMatchPathsDestinationList;
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationList">Ec2NetworkInsightsAccessScopeMatchPathsDestinationList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.source"></a>

```typescript
public readonly source: Ec2NetworkInsightsAccessScopeMatchPathsSourceList;
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList">Ec2NetworkInsightsAccessScopeMatchPathsSourceList</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsDestination[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination">Ec2NetworkInsightsAccessScopeMatchPathsDestination</a>[]

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsSource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource">Ec2NetworkInsightsAccessScopeMatchPathsSource</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeMatchPaths;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths">Ec2NetworkInsightsAccessScopeMatchPaths</a>

---


### Ec2NetworkInsightsAccessScopeMatchPathsSourceList <a name="Ec2NetworkInsightsAccessScopeMatchPathsSourceList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.get"></a>

```typescript
public get(index: number): Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource">Ec2NetworkInsightsAccessScopeMatchPathsSource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsSource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource">Ec2NetworkInsightsAccessScopeMatchPathsSource</a>[]

---


### Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.putPacketHeaderStatement">putPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.putResourceStatement">putResourceStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resetPacketHeaderStatement">resetPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resetResourceStatement">resetResourceStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPacketHeaderStatement` <a name="putPacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.putPacketHeaderStatement"></a>

```typescript
public putPacketHeaderStatement(value: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.putPacketHeaderStatement.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a>[]

---

##### `putResourceStatement` <a name="putResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.putResourceStatement"></a>

```typescript
public putResourceStatement(value: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.putResourceStatement.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a>[]

---

##### `resetPacketHeaderStatement` <a name="resetPacketHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resetPacketHeaderStatement"></a>

```typescript
public resetPacketHeaderStatement(): void
```

##### `resetResourceStatement` <a name="resetResourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resetResourceStatement"></a>

```typescript
public resetResourceStatement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.packetHeaderStatement">packetHeaderStatement</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.resourceStatement">resourceStatement</a></code> | <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.packetHeaderStatementInput">packetHeaderStatementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.resourceStatementInput">resourceStatementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource">Ec2NetworkInsightsAccessScopeMatchPathsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `packetHeaderStatement`<sup>Required</sup> <a name="packetHeaderStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.packetHeaderStatement"></a>

```typescript
public readonly packetHeaderStatement: Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList;
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList</a>

---

##### `resourceStatement`<sup>Required</sup> <a name="resourceStatement" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.resourceStatement"></a>

```typescript
public readonly resourceStatement: Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList;
```

- *Type:* <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList</a>

---

##### `packetHeaderStatementInput`<sup>Optional</sup> <a name="packetHeaderStatementInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.packetHeaderStatementInput"></a>

```typescript
public readonly packetHeaderStatementInput: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a>[]

---

##### `resourceStatementInput`<sup>Optional</sup> <a name="resourceStatementInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.resourceStatementInput"></a>

```typescript
public readonly resourceStatementInput: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource">Ec2NetworkInsightsAccessScopeMatchPathsSource</a>

---


### Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList <a name="Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.get"></a>

```typescript
public get(index: number): Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a>[]

---


### Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetDestinationAddresses">resetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetDestinationPorts">resetDestinationPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetDestinationPrefixLists">resetDestinationPrefixLists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetSourceAddresses">resetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetSourcePorts">resetSourcePorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetSourcePrefixLists">resetSourcePrefixLists</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationAddresses` <a name="resetDestinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetDestinationAddresses"></a>

```typescript
public resetDestinationAddresses(): void
```

##### `resetDestinationPorts` <a name="resetDestinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetDestinationPorts"></a>

```typescript
public resetDestinationPorts(): void
```

##### `resetDestinationPrefixLists` <a name="resetDestinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetDestinationPrefixLists"></a>

```typescript
public resetDestinationPrefixLists(): void
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetProtocols"></a>

```typescript
public resetProtocols(): void
```

##### `resetSourceAddresses` <a name="resetSourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetSourceAddresses"></a>

```typescript
public resetSourceAddresses(): void
```

##### `resetSourcePorts` <a name="resetSourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetSourcePorts"></a>

```typescript
public resetSourcePorts(): void
```

##### `resetSourcePrefixLists` <a name="resetSourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetSourcePrefixLists"></a>

```typescript
public resetSourcePrefixLists(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationAddressesInput">destinationAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPortsInput">destinationPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixListsInput">destinationPrefixListsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourceAddressesInput">sourceAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePortsInput">sourcePortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixListsInput">sourcePrefixListsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationAddresses">destinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixLists">destinationPrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourceAddresses">sourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePorts">sourcePorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixLists">sourcePrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationAddressesInput`<sup>Optional</sup> <a name="destinationAddressesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationAddressesInput"></a>

```typescript
public readonly destinationAddressesInput: string[];
```

- *Type:* string[]

---

##### `destinationPortsInput`<sup>Optional</sup> <a name="destinationPortsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPortsInput"></a>

```typescript
public readonly destinationPortsInput: string[];
```

- *Type:* string[]

---

##### `destinationPrefixListsInput`<sup>Optional</sup> <a name="destinationPrefixListsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixListsInput"></a>

```typescript
public readonly destinationPrefixListsInput: string[];
```

- *Type:* string[]

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `sourceAddressesInput`<sup>Optional</sup> <a name="sourceAddressesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourceAddressesInput"></a>

```typescript
public readonly sourceAddressesInput: string[];
```

- *Type:* string[]

---

##### `sourcePortsInput`<sup>Optional</sup> <a name="sourcePortsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePortsInput"></a>

```typescript
public readonly sourcePortsInput: string[];
```

- *Type:* string[]

---

##### `sourcePrefixListsInput`<sup>Optional</sup> <a name="sourcePrefixListsInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixListsInput"></a>

```typescript
public readonly sourcePrefixListsInput: string[];
```

- *Type:* string[]

---

##### `destinationAddresses`<sup>Required</sup> <a name="destinationAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationAddresses"></a>

```typescript
public readonly destinationAddresses: string[];
```

- *Type:* string[]

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

---

##### `destinationPrefixLists`<sup>Required</sup> <a name="destinationPrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixLists"></a>

```typescript
public readonly destinationPrefixLists: string[];
```

- *Type:* string[]

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `sourceAddresses`<sup>Required</sup> <a name="sourceAddresses" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourceAddresses"></a>

```typescript
public readonly sourceAddresses: string[];
```

- *Type:* string[]

---

##### `sourcePorts`<sup>Required</sup> <a name="sourcePorts" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePorts"></a>

```typescript
public readonly sourcePorts: string[];
```

- *Type:* string[]

---

##### `sourcePrefixLists`<sup>Required</sup> <a name="sourcePrefixLists" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixLists"></a>

```typescript
public readonly sourcePrefixLists: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a>

---


### Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList <a name="Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.get"></a>

```typescript
public get(index: number): Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a>[]

---


### Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer"></a>

```typescript
import { ec2NetworkInsightsAccessScope } from '@cdktn/provider-aws'

new ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResources` <a name="resetResources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resetResourceTypes"></a>

```typescript
public resetResourceTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resourceTypesInput"></a>

```typescript
public readonly resourceTypesInput: string[];
```

- *Type:* string[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a>

---



